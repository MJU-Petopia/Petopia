import React, { useEffect } from 'react';
import VaccineScheduleItem from './VaccineScheduleItem';
import VaccineScheduleHeader from './VaccineScheduleHeader';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: lightgray;
    font-size: 20px;
`;

const VaccineScheduleComponent = ({schedule}) => {

    let date_info = ''

    if (schedule.length !== 0){
        return (
            <div style={{margin: '55px 0'}}>
                {schedule.map((item) => {
                    const info = `${item.date.getFullYear()}년 ${item.date.getMonth()+1}월`;
                    if (info === date_info) {
                        return <VaccineScheduleItem key={`${item.pet_id} ${item.date}`} schedule={item}/>
                    }
                    else {
                        date_info = info
                        return <div key={info}>
                            <VaccineScheduleHeader string={info}/>
                            <VaccineScheduleItem schedule={item}/>
                        </div>
                    }
                })}
            </div>
        );
    } else {
        return (
            <Container>
                등록된 예정이 없습니다.
            </Container>
        )
    }
};

export default VaccineScheduleComponent;