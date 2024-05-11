import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    background-color: lightgray;
    padding: 1px 3px;
    width: 100%;
    font-weight: bold;
    box-sizing: border-box;
`;


const VaccineScheduleHeader = ({string}) => {
    return (
        <Header>
            {string}
        </Header>
    );
};

export default VaccineScheduleHeader;