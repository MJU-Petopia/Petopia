import React from 'react';
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
    const lst = []
    for (let i=0; i<schedule.length; i++) {
        const start = new Date(schedule[i].startDay);
        const temp = new Date(start.getTime());
        const end = new Date(temp.setMonth(temp.getMonth() + schedule[i].totalPeriod));

        while (start <= end) {
            const data = {
                date: new Date(start.getTime()),
                name: schedule[i].pet.name,
                vaccine_name: schedule[i].vaccineType,
                pet_id: schedule[i].pet.id,
                petType: schedule[i].pet.petType,
            }

            lst.push(data)
            start.setDate(start.getDate() + schedule[i].period)
        }
    }
    if (lst.length !== 0){
        return (
            <div style={{margin: '125px 0 55px 0'}}>
                {lst.sort((a,b) => a.date - b.date).map((item) => {
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