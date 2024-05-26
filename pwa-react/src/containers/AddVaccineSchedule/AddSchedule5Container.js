import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {onDateChanged, onEnddateChanged, onPetChanged, onVaccineChanged, onTermChagned, addScheduleAsync} from '../../modules/VaccineSchedule';
import styled from 'styled-components';
import AppbarComponent from '../../components/AppbarComponent';
import CustomRoundDiv from '../../components/CustomComponents/CustomRoundDiv';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .header {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .infopart {
        font-size: 14px;
        font-weight: normal;
        display: flex;
        flex-direction: column;
        align-items: left;
        width: 80%;
        > span {
            margin-bottom: 3px;
        }

        .data {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .petinfo {
            display: flex;
            vertical-align: center;
        }
    }
`;

const AddSchedule5Container = ({start_date, end_date, std_term, vaccine_name, pet_id, petlist, onDateChanged, onEnddateChanged, onPetChanged, onVaccineChanged, onTermChagned, addScheduleAsync}) => {
    const naviagte = useNavigate();

    useEffect(()=>{
        if (!end_date || !std_term || !vaccine_name || !pet_id) {
            naviagte('/')
        }
    },[])

    const dateFormater = (str) => {
        const date = new Date(str)
        return `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`
    }
    const endDateCalculator = (start, str) => {
        const temp = new Date(start);
        temp.setMonth(temp.getMonth() + str);
        return temp.getTime()
    }

    const onSubmitted = async  (start_date, end_date, std_term, vaccine_name ) => {
        const data = {
            "startDay" : start_date,
            "vaccineType": vaccine_name,
            "vaccineName": vaccine_name,
            "period": std_term,
            "totalPeriod": end_date,
        }
        await addScheduleAsync([window.sessionStorage.getItem('id'), pet_id, data]);
        
        naviagte('/')
    }

        return (
            <>
                <AppbarComponent>
                    4/4
                </AppbarComponent>
                <Container>
                    <span className='header'>입력사항을 확인해주세요</span>
                    <div className='infopart'>
                        <span>첫 접종 일자</span>
                        <span className='data'>{dateFormater(start_date)}</span>
                        <span>접종 대상</span>
                        <div className='petinfo data'>
                            <CustomRoundDiv margin={'0 5px 0 0'}/>
                            <span>{petlist.filter(item => item.id === pet_id)[0].name}</span>
                        </div>
                        <span>접종 종류</span>
                        <span className='data'>{vaccine_name}</span>
                        <span>주기</span>
                        <span className='data'>{`${std_term}(일)`}</span>
                        <span>기간 (종료 날짜)</span>
                        <span className='data'>{dateFormater(endDateCalculator(start_date, end_date))}</span>
                    </div>
                    <CustomRoundDiv
                        onClick={() => onSubmitted(start_date, end_date, std_term, vaccine_name)}
                        height={40} 
                        width={90} 
                        margin={'20px 0 0 0'}>
                        완료
                    </CustomRoundDiv>
                </Container>
            </>
        );
   
};

export default connect(({VaccineSchedule, Profile}) => ({
    start_date: VaccineSchedule.start_date,
    end_date: VaccineSchedule.end_date,
    std_term: VaccineSchedule.std_term,
    vaccine_name: VaccineSchedule.vaccine_name,
    pet_id: VaccineSchedule.pet_id,
    petlist: Profile.pet,
}),{
    onDateChanged,
    onEnddateChanged,
    onVaccineChanged,
    onPetChanged,
    onTermChagned,
    addScheduleAsync,
})(AddSchedule5Container);