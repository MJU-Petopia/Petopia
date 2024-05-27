import React from 'react';
import styled from 'styled-components';
import CustomProfileImageInput from '../CustomComponents/CustomProfileImageInput';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    margin: 55px 20px 0 20px;
    display: flex;
    flex-direction: column;

    .middle_wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 10px;
        margin-top: 20px;
    }

    .title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
        margin-top: 20px;
    }

    .necessary{
        color: red;
    }
`;

const Input = styled.input`
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 12px;
    border: 1px solid lightgray;
    font-size: 17px;
    padding-left: 10px;
    outline: none;

    &:focus {
        border-color: gray;
    }
`;

const ProfileChangeComponent = ({ name, phone, email, profileIMG, setName, setPhone, editUserAsync, changeProfileImage }) => {

    const navigate = useNavigate();

    return (
        <Container>
            <div className='middle_wrapper'>
                <CustomProfileImageInput width={100} height={100} file={profileIMG} onChange={changeProfileImage}/>
            </div>
            <div className='title'>
                이름<span className='necessary'>*</span>
            </div>
            <Input type='text' value={name} maxLength={10} onChange={e => setName(e.target.value)} />
            <div className='title'>이메일</div>
            <Input type='text' value={email} maxLength={10} disabled />
            <div className='title'>핸드폰</div>
            <Input type='text' value={phone} maxLength={13} onChange={e => setPhone(e.target.value)} />
            <div className='middle_wrapper'>
                <CustomRoundDiv height={40} width={90} margin={'20px 0 0 0 '} onClick={async () => {
                    const id = window.sessionStorage.getItem('id');
                    const data = {
                        "phone": phone,
                        "name": name
                    }
                    await editUserAsync([id, data]);

                    window.sessionStorage.setItem('name', name);
                    window.sessionStorage.setItem('phone', phone);

                    navigate('/');
                }}>
                    변경
                </CustomRoundDiv>
            </div>
        </Container>
    );
};

export default ProfileChangeComponent;