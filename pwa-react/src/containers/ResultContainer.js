import React from 'react';
import { connect } from 'react-redux';
import Resultcomponent from '../components/Result/Resultcomponent';
import { DiseaseList } from '../List/DiseaseList';

const ResultContainer = ({species, bodypart, file}) => {

    const lst = DiseaseList[species][bodypart];

    return (
        <Resultcomponent file={file} lst={lst}/>
    );
};

export default connect(
    ({AIdiagnosis}) => ({
        species: AIdiagnosis.species,
        bodypart: AIdiagnosis.bodypart,
        file: AIdiagnosis.file
    }),{})(ResultContainer);