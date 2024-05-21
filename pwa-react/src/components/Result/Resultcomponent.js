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

const Resultcomponent = ({lst, file}) => {
    return (
        <Container>
            <CustomRoundDiv backgroundimage={URL.createObjectURL(file)} width={'100%'} height={200} />
            <Swiper
                slidesPerView={1}
                loop={false}
                pagination={{clickable: true}}
                modules={[Navigation, Pagination, A11y, Scrollbar]}
            >
                <SwiperSlide>
                    <ResultSummaryItem result={[]}/>
                </SwiperSlide>
                {lst && lst.map(item => <SwiperSlide key={item.name}><ResultInformationItem disease={item.name} percent={80} reason={item.reason}/></SwiperSlide>)}
            </Swiper>
        </Container>
    );
};

export default Resultcomponent;