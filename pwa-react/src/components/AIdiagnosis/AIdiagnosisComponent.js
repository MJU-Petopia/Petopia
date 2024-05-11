import React from 'react';
import styled from 'styled-components';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';
import CustomFileInput from '../CustomComponents/CustomFileInput';

const FlexDiv = styled.div`
    display: flex;

    > div{
        flex-grow: 1;
        &:not(:first-child) {
            margin-left: 10px
        }
    }
`;

const AIdiagnosisComponent = ({species, bodypart, file, onSpeciesChange, onBodypartChange, onFileChange, onButtonClicked}) => {
    return (
        <div style={{margin: '65px 15px'}}>
            <h2 style={{margin: '10px 0'}}>대상</h2>
            <FlexDiv>
                <CustomRoundDiv 
                    height={120}
                    borderwidth={species ==='dog' ? 2:0}
                    bordercolor={species ==='dog' ? '#3898f2' : 'lightgray'}
                    backgroundimage={'images/dog.jpg'} 
                    onClick={() => onSpeciesChange('dog')}
                />
                <CustomRoundDiv 
                    height={120} 
                    borderwidth={species ==='cat' ? 2:0}
                    bordercolor={species ==='cat' ? '#3898f2' : 'lightgray'}
                    backgroundimage={'images/cat.jpg'} 
                    onClick={() => onSpeciesChange('cat')}
                />
            </FlexDiv>
            <h2 style={{margin: '10px 0'}}>부위</h2>
            <FlexDiv>
                <CustomRoundDiv 
                    height={120} 
                    borderwidth={bodypart === 'eye' ? 2 : 1} 
                    bordercolor={bodypart === 'eye' ? '#3898f2' : 'lightgray'}
                    backgroundcolor={'white'} 
                    color={'black'}
                    onClick={() => onBodypartChange('eye')}
                >안구</CustomRoundDiv>
                <CustomRoundDiv 
                    height={120} 
                    borderwidth={bodypart === 'skin' ? 2 : 1} 
                    bordercolor={bodypart === 'skin' ? '#3898f2' : 'lightgray'}
                    backgroundcolor={'white'} 
                    color={'black'}
                    onClick={() => onBodypartChange('skin')}
                    >피부</CustomRoundDiv>
            </FlexDiv>
            <h2 style={{margin: '10px 0'}}>사진</h2>
            <CustomFileInput file={file} onImageChange={onFileChange}/>
            <CustomRoundDiv
                height={40}
                width={80}
                backgroundcolor={file ? "#f02b70" : 'lightgray'}
                margin={'10px auto'}
                boxshadow={'0px 0px 8px rgba(84,84,84,0.1)'}
                onClick={onButtonClicked}
            >
                진단
            </CustomRoundDiv>
        </div>
    );
};

export default AIdiagnosisComponent;