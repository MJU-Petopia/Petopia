import React from 'react';
import styled from 'styled-components';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';
import PetInfoComponent from './PetInfoComponent';
import PetAddBtnComponent from './PetAddBtnComponent';
import { useNavigate } from 'react-router-dom';
import profile from '../../images/default_profile.png';

const Container = styled.div`
    padding: 55px 0px;

    .title {
        font-size: 18px;
        font-weight: bold;
        padding: 0 0 10px 20px;
    }
`;

const ProfileWrapper = styled.div`
    box-sizing: border-box;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    border-bottom: 5px solid lightgray;

    .profileinfo {
        margin-left: 10px;
        font-size: 15px;
        box-sizing: border-box;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
        span {
            display: block;

            &:first-child {
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
`;

const PetWrapper = styled.div`
    padding: 10px 0;
    border-bottom: 5px solid lightgray;
    .petlist {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
        padding: 0 20px;
        gap: 10px;
        
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

const OtherInfoWrapper = styled.div`
    padding-top: 10px;
    border-bottom: 5px solid lightgray;
    > div:not(:first-child), .add {
        display: block;
        border-top: 1px solid lightgray;
        padding: 15px 0 15px 30px;
    }

    .sign {
        color: red;
    }
`;


const ProfileComponent = ({name, email, petList, deleteUserAsync}) => {

    const navigate = useNavigate();
    return (
        <Container>
            <ProfileWrapper>
                <CustomRoundDiv width={50} height={50} borderradius={25} backgroundimage={profile}/>
                <div className='profileinfo'>
                    <span>{name}</span>
                    <span>{email}</span>
                </div>
            </ProfileWrapper>
            <PetWrapper>
                <div className='title'>반려동물</div>
                <div className='petlist'>
                    {petList.map(pet => <PetInfoComponent pet={pet} key={pet.id} onClick={() => navigate(`/pet/${pet.id}`)}/>)}
                    <PetAddBtnComponent />
                </div>
            </PetWrapper>
            <OtherInfoWrapper>
                <div className='title'>내정보</div>
                <div onClick={() => navigate(`/profilechange/${window.sessionStorage.getItem('id')}`)}>프로필변경</div>
            </OtherInfoWrapper>
            <OtherInfoWrapper>
                <div className='title'>회원정보</div>
                <div className='sign' onClick={() => {
                    window.sessionStorage.removeItem('id');
                    window.sessionStorage.removeItem('phone');
                    window.sessionStorage.removeItem('name');
                    window.sessionStorage.removeItem('gender');
                    window.sessionStorage.removeItem('email');
                    window.location.replace('http://localhost:8080/logout')
                }}>로그아웃</div>
                <div className='sign' onClick={async () => {
                    const id = window.sessionStorage.getItem('id');
                    window.sessionStorage.removeItem('id');
                    window.sessionStorage.removeItem('phone');
                    window.sessionStorage.removeItem('name');
                    window.sessionStorage.removeItem('gender');
                    window.sessionStorage.removeItem('email');
                    await deleteUserAsync(id)
                }}>회원탈퇴</div>
            </OtherInfoWrapper>
        </Container>
    );
};

export default ProfileComponent;