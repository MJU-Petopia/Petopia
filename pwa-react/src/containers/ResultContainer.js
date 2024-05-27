import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Resultcomponent from '../components/Result/Resultcomponent';
import { DiseaseList } from '../List/DiseaseList';
import {resetting} from '../modules/AIdiagnosis';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../components/Loading/LoadingComponent';

const ResultContainer = ({species, bodypart, file, result, loading,resetting}) => {


    const lst = DiseaseList[species][bodypart];
    const navigate = useNavigate();

    useEffect(() => {
        if (!file || (!loading && !result)) {
            navigate('/')
        }
        
        return () => {
            resetting();
        }
    },[]) 

    if (!loading && result) {
        return (
            <Resultcomponent file={file} lst={lst} result={Object.entries(result).sort((a,b) => b[1]- a[1])}/>
        );
    } else {
        return <LoadingComponent />
    }
};

export default connect(
    ({AIdiagnosis, Loading}) => ({
        species: AIdiagnosis.species,
        bodypart: AIdiagnosis.bodypart,
        file: AIdiagnosis.file,
        result :AIdiagnosis.result,
        loading: Loading['AIdiagnosis/GET_RESULT']
    }),{
        resetting
    })(ResultContainer);