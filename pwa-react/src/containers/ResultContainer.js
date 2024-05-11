import React from 'react';
import { connect } from 'react-redux';
import CustomRoundDiv from '../components/CustomComponents/CustomRoundDiv';

const ResultContainer = ({file}) => {
    return (
        <div style={{margin: '65px 10px'}}>
            <CustomRoundDiv backgroundimage={URL.createObjectURL(file)} width={'100%'} height={200} />
        </div>
    );
};

export default connect(
    ({AIdiagnosis}) => ({
        file: AIdiagnosis.file
    }),{})(ResultContainer);