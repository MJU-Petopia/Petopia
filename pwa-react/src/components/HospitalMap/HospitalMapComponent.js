import { useEffect, useRef, useState } from 'react';

const HospitalMapComponent = () => {
  const mapElement = useRef(null);
  const { naver } = window;
  const [myLocation, setMyLocation] = useState({});

  useEffect(() => {
    if (!mapElement.current || !naver) return;

    mapElement.current.style.height = `${window.innerHeight - 110}px`;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(myLocation.latitude, myLocation.longitude);
    const mapOptions = {
        
      center: location,
      zoom: 15,
      zoomControl: true,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [mapElement, myLocation]);

  useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    }
  },[])

  function success(position) {
    setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
    });
  }

  function error() {
    setMyLocation({
        latitude: 37.2217172378517,
        longitude: 127.18159006636309
    });
  }

  return (
    <>
      <div id='map' ref={mapElement} style={{margin: '55px 0', height: '400px' }} />
    </>
  );
};

export default HospitalMapComponent;