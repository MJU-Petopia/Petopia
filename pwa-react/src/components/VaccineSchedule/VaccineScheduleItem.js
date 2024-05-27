import React from 'react';
import styled from 'styled-components';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv.js'
import cat from '../../images/cat_character.png';
import dog from '../../images/dog_character.jpeg';

const ScheduleItem = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    width: 100%;
    height: 80px;
    background-color: white;
    padding: 7px 7px;
    border-bottom: 2px solid lightgray;
    box-sizing: border-box;

    .date {
        font-weight: bold;
    }

    .pet_info {
        font-size: 14px;
        font-weight: 500;
    }
`;

const Flexbox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        display: inline-flex;
        align-items: center;
    }
`;



const VaccineScheduleItem = ({schedule}) => {
    const weekdayPicker = (date) => {
        switch (date) {
            case 0:
                return '일요일'
            case 1:
                return '월요일'
            case 2:
                return '화요일'
            case 3:
                return '수요일'
            case 4:
                return '목요일'
            case 5:
                return '금요일'
            default:
                return '토요일'
        }
    }

    return (
        <>
            <ScheduleItem>
                <span className='date'>{`${schedule.date.getMonth()+1}월 ${schedule.date.getDate()}일 ${weekdayPicker(schedule.date.getDay())}`}</span>
                <Flexbox className='pet_info'>
                    <span>{schedule.vaccine_name}</span>
                    <div>
                        <CustomRoundDiv margin={'0 7px 0 0'} backgroundimage={schedule.petType === '강아지' ? dog : cat}/>
                        <span>{schedule.name}</span>
                    </div>
                </Flexbox>
            </ScheduleItem>
        </>
    );
};

export default React.memo(VaccineScheduleItem);