import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AppbarComponent from '../../components/AppbarComponent';
import styled from 'styled-components';
import { onEnddateChanged, onTermChagned } from '../../modules/VaccineSchedule';
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
        margin-bottom: 30px;
    }

    > .inputpart {
        font-size: 14px;
        font-weight: normal;
        display: flex;
        flex-direction: column;
        align-items: left;
        width: 80%;
        > span {
            margin-bottom: 3px;
        }

        > input {
            margin-bottom: 10px;
            height: 25px;
            font-size: 15px;
            border: solid 1px lightgray;
            border-radius: 4px;
            outline: none;

            &:focus {
                border-color: black;
            }
        }
    }

    .explanation {
        color: lightgray;
    }
`;

const AddSchedule4Container = ({pet_id, vaccine_name, std_term, end_date, onTermChagned, onEnddateChanged}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if(!pet_id || !vaccine_name) {
            navigate('/')
        }
    },[]) 

    const onNextClicked = () => {
        if (std_term && end_date) {
            navigate('/addschedule5')
        }
    }

    return (
        <>
            <AppbarComponent>
                3/4
            </AppbarComponent>
            <Container>
                <span className='header'>세부사항을 입력해주세요</span>
                <div className='inputpart'>
                    <span className='label'>주기 (단위: 일)</span>
                    <span className='explanation'>입력한 주기마다 일정이 생성됩니다</span>
                    <input type='number' onChange={e => onTermChagned(e.target.value)}/>
                    <span className='label'>총 기간 (단위: 월)</span>
                    <span className='explanation'>입력한 기간동안의 일정만 생성됩니다</span>
                    <input type='number' onChange={e => onEnddateChanged(e.target.value)}/>
                </div>
                <CustomRoundDiv height={40} width={90} margin={'20px 0 0 0'} backgroundcolor={std_term && end_date ? "#f02b70" : 'lightgray'} onClick={onNextClicked}>
                    다음
                </CustomRoundDiv>
            </Container>
        </>
    );  
};

export default connect(({VaccineSchedule}) => ({
    std_term: VaccineSchedule.std_term,
    end_date: VaccineSchedule.end_date,
    pet_id: VaccineSchedule.pet_id,
    vaccine_name: VaccineSchedule.vaccine_name,
}),{
    onEnddateChanged,
    onTermChagned
})(AddSchedule4Container);