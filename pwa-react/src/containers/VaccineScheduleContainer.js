import React from 'react';
import { onScheduleAdded, onScheduleDeleted } from '../modules/VaccineSchedule';
import { connect } from 'react-redux';
import VaccineScheduleComponent from '../components/VaccineSchedule/VaccineScheduleComponent';
import CustomRoundDiv from '../components/CustomComponents/CustomRoundDiv';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const VaccineScheduleContainer = ({schedule, onScheduleAdded, onScheduleDeleted}) => {
    return (
        <>
            <VaccineScheduleComponent schedule={schedule}/>
            <Link to='/addschedule1'>
                <CustomRoundDiv position={'fixed'} bottom ={70} right={10} height={50} width={50} borderradius={25} boxshadow={'0px 0px 8px rgba(84,84,84,0.5)'} color={'white'}>
                    <FaPlus />
                </CustomRoundDiv>
            </Link>
        </>
    );
};

export default connect(
    ({VaccineSchedule}) => ({
        schedule: VaccineSchedule.schedule
    }),{
        onScheduleAdded,
        onScheduleDeleted
    }
)(VaccineScheduleContainer);