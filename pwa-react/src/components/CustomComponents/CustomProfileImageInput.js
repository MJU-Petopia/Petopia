import React from 'react';
import styled from 'styled-components';
import { FaPlus } from "react-icons/fa6";


const InputPart = styled.input`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
`;

const Wrapper = styled.div`
    position: relative;
    width: ${props => props.width ? `${props.width}px` : '100px'};
    height: ${props => props.height ? `${props.height}px` : '100px'};
`;

const ImagePart = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    background-color: lightgray;
    background-image: ${({file}) => {
        if (file) {
            return `url('${URL.createObjectURL(file)}')`
        }
        return 'none'
    }};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const AddBtnPart = styled.div`
    position: absolute;
    height: 25px;
    width: 25px;
    border-radius: 13px;
    background-color: white;
    border: 1px solid lightgray;
    color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    right: 0;
`;


const CustomProfileImageInput = ({width, height, file, onChange}) => {
    return (
        <Wrapper width={width} height={height}>
            <ImagePart file={file}/>
            <AddBtnPart>
                <FaPlus />
            </AddBtnPart>
            <InputPart type='file' accept='image/*' onChange={e => onChange(e.target.files[0])}/>
        </Wrapper>
    );
};

export default React.memo(CustomProfileImageInput);