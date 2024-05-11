import React from 'react';
import './App.css';
import AIdiagnosisContainer from './containers/AIdiagnosisContainer';
import BottomNavigationContainer from './containers/BottomNavigationContainer';
import { connect } from 'react-redux';
import VaccineScheduleContainer from './containers/VaccineScheduleContainer';
import AppbarComponent from './components/AppbarComponent';
import HospitalMapComponent from './components/HospitalMap/HospitalMapComponent';

function App({tab}) {
  return (
    <>
      <AppbarComponent isHome={true}/>
      {tab === 'AI진단' && <AIdiagnosisContainer />}
      {tab === '일정' && <VaccineScheduleContainer />}
      {tab === '병원' && <HospitalMapComponent />}
      <BottomNavigationContainer />
    </>
  );
}

export default connect(({BottomNavigation}) => ({
  tab: BottomNavigation.tab
}),{})(App);
