import React from 'react';
import styled from 'styled-components';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, A11y, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import ResultInformationItem from './ResultInformationItem';
import ResultSummaryItem from './ResultSummaryItem';

const Container = styled.div`
    margin: 65px 10px 0 10px;
    height: 100%;
`;

const Resultcomponent = ({file, lst, result}) => {

    return (
        <Container>
            <CustomRoundDiv backgroundimage={URL.createObjectURL(file)} width={'100%'} height={150} margin={'0 15px 0 15px'}/>
            <Swiper
                slidesPerView={1}
                loop={false}
                pagination={{clickable: true}}
                modules={[Navigation, Pagination, A11y, Scrollbar]}
            >
                <SwiperSlide>
                    <ResultSummaryItem result={result}/>
                </SwiperSlide>
                {result && result.map(([key, value])=> <SwiperSlide key={key}><ResultInformationItem disease={key} percent={Math.round(value*10000)/100} reason={lst[key].lst} symptom={lst[key].symptom} cure={lst[key].cure}/></SwiperSlide>)}
            </Swiper>
        </Container>
    );
};

export default Resultcomponent;