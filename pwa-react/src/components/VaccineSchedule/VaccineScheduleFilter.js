import React from 'react';
import styled from 'styled-components';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';

const Container = styled.div`
    height: 70px;
    width: 100%;
    background-color: white;
    top: 55px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
`;

const ItemWrapper = styled.div`
    display: flex;
    height: 100%;
    background-color: ${props => props.$selected ? 'lightblue' : 'white'};
    flex-direction: column;
    padding: 0 10px;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 15px;
    font-weight: bold;
`;

const VaccineScheduleFilter = ({filter_id, petlist, onFilterChanged}) => {
    return (
        <Container>
            {petlist.length > 0 && petlist.map(pet => <ItemWrapper key={pet.id} $selected={filter_id === pet.id} onClick={() => onFilterChanged(pet.id)}>
                <CustomRoundDiv height={30} width={30} borderradius={15} />
                <span>{pet.name}</span>
            </ItemWrapper>)}
        </Container>
    );
};

export default React.memo(VaccineScheduleFilter)