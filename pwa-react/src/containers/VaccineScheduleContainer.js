import React from 'react';
import { connect } from 'react-redux';
import VaccineScheduleComponent from '../components/VaccineSchedule/VaccineScheduleComponent';
import CustomRoundDiv from '../components/CustomComponents/CustomRoundDiv';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LoadingComponent from '../components/Loading/LoadingComponent';
import VaccineScheduleFilterComponent from '../components/VaccineSchedule/VaccineScheduleFilterComponent';
import { onFilterChanged } from '../modules/VaccineSchedule';

const VaccineScheduleContainer = ({schedule, petlist, filter_id, loading, onFilterChanged}) => {
    return (
        <>
            {
                !loading ? <>
                    <VaccineScheduleFilterComponent petlist={petlist} onFilterChanged={onFilterChanged} filter_id={filter_id}/>
                    <VaccineScheduleComponent schedule={filter_id ? schedule.filter(item => item.pet.id === filter_id) : schedule}/> </>:
                    <LoadingComponent />
            }
            <Link to='/addschedule1'>
                <CustomRoundDiv position={'fixed'} bottom ={70} right={10} height={50} width={50} borderradius={25} boxshadow={'0px 0px 8px rgba(84,84,84,0.5)'} color={'white'}>
                    <FaPlus />
                </CustomRoundDiv>
            </Link>
        </>
    );
};

export default connect(
    ({VaccineSchedule,Profile, Loading}) => ({
        schedule: VaccineSchedule.schedule,
        filter_id: VaccineSchedule.filter_id,
        petlist: Profile.pet,
        loading: Loading['VaccineSchedule/ADD_SCHEDULE']
    }),{
        onFilterChanged
    }
)(VaccineScheduleContainer);