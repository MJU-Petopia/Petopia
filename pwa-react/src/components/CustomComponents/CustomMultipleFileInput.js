import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    border: 1px solid lightgray;
    border-radius: 12px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    overflow-x: auto;
    padding: 0 10px;
    box-sizing: border-box;
    gap: 10px;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
`;

const ImageItem = styled.div`
    height: 80px;
    width: 80px;
    border-radius: 12px;
    background-position: center;
    background-size: cover;
    background-image: ${props => `url('${URL.createObjectURL(props.file)}')`};
    flex: 0 0 auto;
`;

const CustomMultipleFileInput = ({file, setFile}) => {
    return (
        <Wrapper>
            <Input type='file' accept='image/*' onChange={e => setFile(Array.from(e.target.files))} multiple/>
            {file && file.map(item => <ImageItem key={`${item.name}${item.lastModified}`} file={item}/>)}
        </Wrapper>
    );
};

export default React.memo(CustomMultipleFileInput);