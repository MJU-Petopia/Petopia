import React from 'react';
import styled from 'styled-components';
import { TbCameraSearch } from "react-icons/tb";
import { BiInjection } from "react-icons/bi";
import { FaRegHospital } from "react-icons/fa6";
import { FaRegListAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import BottomNavItem from './BottomNavItem';

const BottomNav = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 55px;
    background-color: white;
    box-shadow: 0px -6px 5px 0px rgba(84,84,84,0.1);
`;


const BottomNavComponent = ({onClick, tab}) => {
    return (
        <BottomNav>
            <BottomNavItem text={'AI진단'} onClick={onClick} tab={tab}>
                <TbCameraSearch />
            </BottomNavItem>
            <BottomNavItem text={'일정'} onClick={onClick} tab={tab}>
                <BiInjection />
            </BottomNavItem>
            <BottomNavItem text={'병원'} onClick={onClick} tab={tab}>
                <FaRegHospital />
            </BottomNavItem>
            <BottomNavItem text={'게시판'} onClick={onClick} tab={tab}>
                <FaRegListAlt />
            </BottomNavItem>
            <BottomNavItem text={'나'} onClick={onClick} tab={tab}>
                <FiUser />
            </BottomNavItem>
        </BottomNav>
    );
};

export default BottomNavComponent;