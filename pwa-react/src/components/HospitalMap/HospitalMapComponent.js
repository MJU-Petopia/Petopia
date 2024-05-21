import React, { useEffect, useState } from 'react';

const HospitalMapComponent = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [infowindow, setInfowindow] = useState(null);
  const [currentLocationMarker, setCurrentLocationMarker] = useState(null); 

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=242b47238eb10a4a9014ecd9f26b0cf6&libraries=services&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              console.log("Current Position:", latitude, longitude);
              const location = new window.kakao.maps.LatLng(latitude, longitude);
              setCurrentLocation(location);

              const container = document.getElementById('map');
              const options = {
                center: location,
                level: 3,
              };
              const map = new window.kakao.maps.Map(container, options);
              setMap(map);

              
              const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
              setInfowindow(infowindow);

              
              const marker = new window.kakao.maps.Marker({
                position: location,
                map: map,
                image: new window.kakao.maps.MarkerImage(
                  'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg',
                  new window.kakao.maps.Size(14, 14), 
                  {
                    offset: new window.kakao.maps.Point(7, 7) 
                  }
                )
              });
              setCurrentLocationMarker(marker);


              searchPlaces("동물병원", location, map);


              window.kakao.maps.event.addListener(map, 'dragend', () => {
                const center = map.getCenter();
                setCurrentLocation(center);
                searchPlaces("동물병원", center, map);
              });
            },
            (error) => {
              console.error("Error occurred while retrieving location:", error);
              alert("위치를 가져오는 데 실패했습니다. 브라우저의 위치 권한을 확인하세요.");
            },
            {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
            }
          );
        } else {
          alert("Geolocation을 지원하지 않는 브라우저입니다.");
        }
      });
    };

    script.onerror = () => {
      console.error("Failed to load Kakao Map script");
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {

    if (map && currentLocation) {
      searchPlaces("동물병원", currentLocation, map);
    }
  }, [map, currentLocation]);

  const searchPlaces = (keyword, location, map) => {
    if (!map || !location || !infowindow) return; 

    const ps = new window.kakao.maps.services.Places();
    const placesSearchCB = (data, status, pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {

        markers.forEach(marker => marker.setMap(null));
        setMarkers([]);


        const newMarkers = data.map(place => {
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(place.y, place.x),
            map: map,
          });


          window.kakao.maps.event.addListener(marker, 'click', () => {
            if (infowindow) {
              infowindow.setContent(`
                <div style="padding:5px;font-size:12px; width: 200px;">
                  <strong>${place.place_name}</strong><br />
                  ${place.road_address_name || place.address_name}<br />
                  <a href="${place.place_url}" target="_blank">상세보기</a>
                </div>
              `);
              infowindow.open(map, marker);
            }
          });

          return marker;
        });
        setMarkers(newMarkers);
      }
    };

    ps.keywordSearch(keyword, placesSearchCB, {
      location: location, 
      radius: 5000, 
    });
  };

  const handleMoveToCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = new window.kakao.maps.LatLng(latitude, longitude);
          if (map) {
            map.setCenter(location);
            searchPlaces("동물병원", location, map);
            setCurrentLocation(location);

        
            if (currentLocationMarker) {
              currentLocationMarker.setPosition(location);
            } else {
              const marker = new window.kakao.maps.Marker({
                position: location,
                map: map,
                image: new window.kakao.maps.MarkerImage(
                  'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg',
                  new window.kakao.maps.Size(14, 14), 
                  {
                    offset: new window.kakao.maps.Point(7, 7) 
                  }
                )
              });
              setCurrentLocationMarker(marker);
            }
          }
        },
        (error) => {
          console.error("Error occurred while retrieving location:", error);
          alert("위치를 가져오는 데 실패했습니다. 브라우저의 위치 권한을 확인하세요.");
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      alert("Geolocation을 지원하지 않는 브라우저입니다.");
    }
  };

  return (
    <div style={{ width: 'calc(100% - 20px)', height: 'calc(100vh - 130px)', position: 'relative', margin: '65px 10px' }}>
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
      <button
        onClick={handleMoveToCurrentLocation}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          zIndex: 10,
          padding: '10px 20px',
          backgroundColor: '#fff',
          border: 'none',
          borderRadius: '5px',
          color: '#444',
          fontSize: '14px',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          cursor: 'pointer',
          transition: 'background-color 0.3s, transform 0.3s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = '#fff';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = '#fff';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        내 위치로 이동
      </button>
    </div>
  );
};

export default HospitalMapComponent;