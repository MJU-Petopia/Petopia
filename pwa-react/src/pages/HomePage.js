import React, { useEffect } from 'react';
import AppbarComponent from '../components/AppbarComponent';
import AIdiagnosisContainer from '../containers/AIdiagnosisContainer';
import HospitalMapComponent from '../components/HospitalMap/HospitalMapComponent';
import BoardContainer from '../containers/BoardContainer';
import ProfileContainer from '../containers/ProfileContainer';
import BottomNavigationContainer from '../containers/BottomNavigationContainer';
import VaccineScheduleContainer from '../containers/VaccineScheduleContainer';
import { connect } from 'react-redux';
import { getFeedAsync } from '../modules/Borad';
import { getPetlistAsync } from '../modules/Profile';

const HomePage = ({tab, getFeedAsync, getPetlistAsync}) => {

    useEffect(() => {
        const id = window.sessionStorage.getItem('id')
        getFeedAsync()
        getPetlistAsync(id)
    }, [])

    return (
        <>
            <AppbarComponent isHome={true}/>
            {tab === 'AI진단' && <AIdiagnosisContainer />}
            {tab === '일정' && <VaccineScheduleContainer />}
            {tab === '병원' && <HospitalMapComponent />}
            {tab === '게시판' && <BoardContainer />}
            {tab === '나' && <ProfileContainer />}
            <BottomNavigationContainer />
        </>
    );
};

export default connect(({BottomNavigation}) => ({
    tab: BottomNavigation.tab
}),{
    getFeedAsync,
    getPetlistAsync
})(HomePage);