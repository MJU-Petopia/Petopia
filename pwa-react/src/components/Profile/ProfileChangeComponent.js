import React from 'react';
import styled from 'styled-components';
import CustomProfileImageInput from '../CustomComponents/CustomProfileImageInput';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';

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

const ProfileChangeComponent = () => {
    return (
        <Container>
            <div className='middle_wrapper'>
                <CustomProfileImageInput width={100} height={100}/>
            </div>
            <div className='title'>
                이름<span className='necessary'>*</span>
            </div>
            <Input type='text' value={'원래이름'} maxLength={10}/>
            <div className='title'>
                이메일
            </div>
            <Input type='text' value={'example@example.com'} maxLength={10} disabled/>
            <div className='middle_wrapper'>
                <CustomRoundDiv height={40} width={90} margin={'20px 0 0 0 '}>
                    변경
                </CustomRoundDiv>
            </div>
        </Container>
    );
};

export default ProfileChangeComponent;