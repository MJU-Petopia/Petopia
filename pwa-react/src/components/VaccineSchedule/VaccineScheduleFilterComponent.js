import React from 'react';
import styled from 'styled-components';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';

const Container = styled.div`
    height: 70px;
    padding: 0 10px;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    position: fixed;
    top: 55px;
`;

const ItemWrapper = styled.div`
    padding: 0 10px;
    display: flex;
    height: 100%;
    background-color: ${props => props.$selected ? 'lightblue' : "white"};
    flex-direction: column;
    gap: 5px;
    font-size: 15px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
`;

const VaccineScheduleFilterComponent = ({petlist, filter_id, onFilterChanged}) => {
    return (
        <Container>
            {petlist.length > 0 && petlist.map(pet => <ItemWrapper key={pet.id} $selected={filter_id === pet.id} onClick={() => onFilterChanged(pet.id)}>
                <CustomRoundDiv height={30} width={30} borderradius={15} />
                <span>{pet.name}</span>
            </ItemWrapper>)}
        </Container>
    );
};

export default VaccineScheduleFilterComponent;