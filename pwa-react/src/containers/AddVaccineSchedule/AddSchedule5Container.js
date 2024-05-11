import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { onScheduleAdded, onDateChanged, onEnddateChanged, onPetChanged, onVaccineChanged, onTermChagned} from '../../modules/VaccineSchedule';
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

const AddSchedule5Container = ({start_date, end_date, std_term, vaccine_name, pet_id, onScheduleAdded, onDateChanged, onEnddateChanged, onPetChanged, onVaccineChanged, onTermChagned}) => {
    const naviagte = useNavigate();

    useEffect(()=>{
        if (!end_date || !std_term || !vaccine_name || !pet_id) {
            naviagte('/')
        }
    },[])

    const dateFormater = (date) => {
        return `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`
    }

    const onSubmitted = (start_date, end_date, std_term, pet_id, vaccine_name, onScheduleAdded) => {
        const start = new Date(start_date.getTime());
        const end = new Date(end_date.getTime());
        let list = [];
        while (start <= end) {
            list.push({
                pet_id: pet_id,
                date: new Date(start.getTime()),
                vaccine_name: vaccine_name
            });
            start.setDate(start.getDate() + std_term)
        }

        onScheduleAdded(list);
        onEnddateChanged(null);
        onPetChanged(null);
        onVaccineChanged(null);
        onDateChanged(new Date());
        onTermChagned(null);
        naviagte('/')
    }

    try {
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
                            <span>{pet_id}</span>
                        </div>
                        <span>접종 종류</span>
                        <span className='data'>{vaccine_name}</span>
                        <span>주기</span>
                        <span className='data'>{`${std_term}(일)`}</span>
                        <span>기간 (종료 날짜)</span>
                        <span className='data'>{dateFormater(end_date)}</span>
                    </div>
                    <CustomRoundDiv
                        onClick={() => onSubmitted(start_date, end_date, std_term, pet_id, vaccine_name, onScheduleAdded)}
                        height={40} 
                        width={90} 
                        margin={'20px 0 0 0'}>
                        완료
                    </CustomRoundDiv>
                </Container>
            </>
        );
    } catch {
    }
};

export default connect(({VaccineSchedule}) => ({
    start_date: VaccineSchedule.start_date,
    end_date: VaccineSchedule.end_date,
    std_term: VaccineSchedule.std_term,
    vaccine_name: VaccineSchedule.vaccine_name,
    pet_id: VaccineSchedule.pet_id
}),{
    onScheduleAdded,
    onDateChanged,
    onEnddateChanged,
    onVaccineChanged,
    onPetChanged,
    onTermChagned,
    
})(AddSchedule5Container);