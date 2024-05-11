import React from 'react';
import styled from 'styled-components';
import { FaPlus } from "react-icons/fa";

const Input = styled.input`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
`;

const Container = styled.div`
    width: 100%;
    position: relative;
    height: 200px;
    border-radius: 12px;
    border: ${({file}) => file ? '2px dashed transparent' : '2px dashed lightgray'};
    text-align: center;
    color: ${({file}) => file ? 'transparent' : 'lightgray'};;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: ${({file}) => {
        if (file) {
            return `url('${URL.createObjectURL(file)}')`
        }
        return 'none'
    }};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    > * {
        margin-bottom: 10px;
    }
`;

const CustomFileInput = ({file, onImageChange}) => {
    return (
        <Container file={file}>
            <FaPlus fontSize={'30px'}/>
            이곳을 탭하여 사진을 추가하세요.
            <Input type='file' accept='image/*' onChange={(e) => onImageChange(e.target.files[0])}/>
        </Container>
    );
};

export default CustomFileInput;