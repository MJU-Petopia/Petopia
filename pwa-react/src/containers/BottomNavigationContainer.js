import React from 'react';
import BottomNavComponent from '../components/BottomNavigation/BottomNavComponent';
import { connect } from 'react-redux';
import { onTabClicked } from '../modules/BottomNavigation';

const BottomNavigationContainer = ({onTabClicked, tab}) => {
    return (
       <BottomNavComponent onClick={onTabClicked} tab={tab}/>
    );
};

export default connect(
    ({BottomNavigation}) => ({
        tab: BottomNavigation.tab
    }),
    {
        onTabClicked
    }
)(BottomNavigationContainer);