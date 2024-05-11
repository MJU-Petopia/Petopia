import React from 'react';
import { connect } from 'react-redux';
import { onDateChanged } from '../../modules/VaccineSchedule';
import AppbarComponent from '../../components/AppbarComponent';
import 'react-datepicker/dist/react-datepicker.module.css';
import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko'
import CustomRoundDiv from '../../components/CustomComponents/CustomRoundDiv';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 100vh;

    > span {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
    }
`;

const AddSchedule1Container = ({date, onDateChanged}) => {
    return (
        <>
            <AppbarComponent>
                1/4
            </AppbarComponent>
            <Container>
                <span>1차 접종(예정) 날짜를 입력하세요.</span>
                <ReactDatePicker locale={ko} selected={date} onChange={date => onDateChanged(date)} inline/>
                <Link to='/addschedule2'>
                    <CustomRoundDiv height={40} width={90} margin={'20px 0 0 0'}>
                        다음
                    </CustomRoundDiv>
                </Link>
            </Container>
        </>
    );  
};

export default connect(({VaccineSchedule}) => ({
    date: VaccineSchedule.start_date
}),{
    onDateChanged
})(AddSchedule1Container);