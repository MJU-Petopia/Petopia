import React from 'react';
import AppbarComponent from '../components/AppbarComponent';
import ResultContainer from '../containers/ResultContainer';

const ResultPage = () => {
    return (
        <>
            <AppbarComponent isHome={false}>
                진단결과
            </AppbarComponent>
            <ResultContainer/>
        </>
    );
};

export default ResultPage;