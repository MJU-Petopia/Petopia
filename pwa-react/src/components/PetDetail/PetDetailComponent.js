import React from 'react';
import styled from 'styled-components';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';
import { FaRegCircle } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { IoMale } from "react-icons/io5";
import { IoFemale } from "react-icons/io5";
import { IoPawSharp } from "react-icons/io5";
import LoadingComponent from '../Loading/LoadingComponent';
import { useNavigate, useParams } from 'react-router-dom';



const Container = styled.div`
    margin: 55px 15px 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .name {
        font-size: 20px;
        font-weight: bold;
    }

    .species {
        font-size: 15px;
        color: gray;
    }
`;

const AdditionalInfoContainer = styled.div`
    margin: 20px 0;
    width: 100%;
    max-width: 400px;
    border-radius: 12px;
    background-color: #f02b70;
    color: white;
    height: 100px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 10px 0;
    justify-content: space-evenly;
`;

const InfoItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    padding-top: 10px;
    gap: 10px;

    &:not(:first-child) {
        border-left: 2px solid white;
    }

    .title {
        font-size: 18px;
        font-weight: bold;
    }

    .content{
        font-size: 18px;
    }
`;

const VaccineInfoContainer = styled.div`
    display: block;
    width: 100%;

    .wrapper {
        margin-left: 10px;

        > div{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 3px 0;
            gap: 10px;

            .icon {
                color: #f02b70
            }
        }
    }
`;

const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    margin: 20px 0px;

    .edit {
        background-color: lightgray;
        color: #f02b70;
    }

    .delete {
        background-color: #f02b70;
        color: white;
    }

    .edit, .delete {
        width: 120px;
        height: 40px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
    }
`;

const PetDetailComponent = ({type, name, gender, neutering, kind, birthday, vaccinationList, loading, onDeleteClicked}) => {

    const navigate = useNavigate();
    const param = useParams();

    return !loading ? (
        <Container>
            <CustomRoundDiv width={90} height={90} borderradius={50} margin={'20px 0 10px 0'}/>
            <div className='name'>{name}</div>
            <div className='species'>{kind}</div>
            <AdditionalInfoContainer>
                <InfoItemContainer>
                    <div className='title'>성별</div>
                    <div className='content'>{gender === '수컷' ? <IoMale/> : <IoFemale/>}</div>
                </InfoItemContainer>
                <InfoItemContainer>
                    <div className='title'>생일</div>
                    <div className='content'>{`20${birthday.slice(0,2)}.${birthday.slice(2,4)}.${birthday.slice(4)}`}</div>
                </InfoItemContainer>
                <InfoItemContainer>
                    <div className='title'>중성화여부</div>
                    <div className='content'>{neutering === 0 ? <CgClose /> : <FaRegCircle />}</div>
                </InfoItemContainer>
            </AdditionalInfoContainer>
            <VaccineInfoContainer>
                <div className='name'>접종목록</div>
                <div className='wrapper'>
                    {vaccinationList !=='' ? vaccinationList.split(',').map(vaccine => <div key={vaccine}><IoPawSharp className='icon'/><span>{vaccine.trim()}</span></div> ) : <div>없음</div>}
                </div>
            </VaccineInfoContainer>
            <BtnWrapper>
                <div className='edit' onClick={()=>navigate(`/edit/pet/${param.id}`)}>수정</div>
                <div className='delete' onClick={async () => {
                    await onDeleteClicked([param.id, window.sessionStorage.getItem('id')])
                    navigate('/');
                }}>삭제</div>
            </BtnWrapper>
        </Container>
    ) :<LoadingComponent />;
};

export default PetDetailComponent;