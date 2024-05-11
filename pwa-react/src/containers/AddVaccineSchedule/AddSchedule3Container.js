import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { onVaccineChanged } from '../../modules/VaccineSchedule';
import AppbarComponent from '../../components/AppbarComponent.js';
import styled from 'styled-components';
import { VaccineList } from '../../List/VaccineList.js';
import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import CustomRoundDiv from '../../components/CustomComponents/CustomRoundDiv.js';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    > span {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
    }
`;

const VaccineListWrapper = styled.div`
    height: 300px;
    width: 250px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0px 0px 8px lightgray;
    padding: 5px 10px;
    box-sizing: border-box;
    font-size: 15px;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    padding: 8px 0;
    font-weight: bold;

    .active {
        color: #f02b70;
        font-size: 20px;
    }

    .deactive {
        font-size: 15px;
    }
`;

const AddSchedule3Container = ({pet_id, vaccine_name, onVaccineChanged}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!pet_id) {
            navigate('/')
        }
    },[])

    const onNextClicked = () => {
        if(vaccine_name) {
            navigate('/addschedule4');
        }
    }

    return (
        <>
            <AppbarComponent>
                3/4
            </AppbarComponent>
            <Container>
                <span>접종 종류를 선택해주세요</span>
                <VaccineListWrapper>
                    {VaccineList['dog'].map(vaccine => <VaccineItem key={vaccine} vaccine={vaccine} vaccine_name={vaccine_name} onClick={onVaccineChanged}/>)}
                </VaccineListWrapper>
                <CustomRoundDiv height={40} width={90} margin={'20px 0 0 0'} backgroundcolor={vaccine_name ? "#f02b70" : 'lightgray'} onClick={onNextClicked}>
                    다음
                </CustomRoundDiv>
            </Container>
            
        </>
    );
};

const VaccineItem = ({vaccine, vaccine_name, onClick}) => {
    return (
        <ItemWrapper onClick={() => {onClick(vaccine)}}>
            <span>{vaccine}</span>
            <IoMdCheckmark className={vaccine === vaccine_name ? 'active' : 'deactive'}/>
        </ItemWrapper>
    )
}

export default connect(({VaccineSchedule}) => ({
    vaccine_name: VaccineSchedule.vaccine_name,
    pet_id: VaccineSchedule.pet_id
}),{
    onVaccineChanged
})(AddSchedule3Container);