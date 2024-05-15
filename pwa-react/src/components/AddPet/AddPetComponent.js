import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import CustomProfileImageInput from '../CustomComponents/CustomProfileImageInput';
import { FaCheck } from "react-icons/fa6";
import { BottomSheet } from 'react-spring-bottom-sheet';
import {SpeciesList} from '../../List/SpeciesList.js';
import { IoClose } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv.js';
import { useNavigate } from 'react-router-dom';



const Container = styled.div`
    margin: 55px 20px 0 20px;

    .profile_part {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0 0 0;
    }

    .checkbox_part {
        display: flex;
        justify-content: left;
        align-items: center;
        font-size: 14px;
        gap: 5px;
        margin-top: 5px;
        color: gray;
    }
    
    .title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
        margin-top: 20px;

        .additional {
            font-size: 10px;
            color: gray;
            font-weight: normal;
        }
    }

    .necessary{
        color: red;
    }

    .flex {
        display: flex;
        gap: 10px;
        justify-content: center;

        > div {
            flex: 1 1 auto;
        }
    }

    .submit_btn {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 20px 0
    }
`;

const SelectDiv = styled.div`
    height: 45px;
    border-radius: 12px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: ${props => props.selected ? '2px' : '1px'};
    box-sizing: border-box;
    border-style: solid;
    font-weight: bold;
    border-color: ${props => props.selected ? '#f02b70' : 'lightgray'};
    color: ${props => props.selected ? '#f02b70' : 'lightgray'};
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

const Textarea = styled.textarea`
    height: 120px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 12px;
    border: 1px solid lightgray;
    font-size: 15px;
    outline: none;
    padding: 5px;
    &:focus {
        border-color: gray;
    }
`;

const CheckBox = styled.div`
    height: 15px;
    width: 15px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.checked ? '#f02b70' : 'gray'};
    display: inline-block;
    border-radius: 4px;
    color: ${props => props.checked ? '#f02b70' : 'gray'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-weight: bold;
`;

const SpeciesDiv = styled.div`
    height: 45px;
    border-radius: 12px;
    border: 1px solid lightgray;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 10px;
    .search {
        position: absolute;
        right: 10px;
        top: 8px;
        color: lightgray;
        font-size: 25px;
    }
`;

const InnerContent = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 20px;
    font-weight: bold;
    align-items: center;
`;

const CloseBtn = styled.div`
    position: absolute;
    font-size: 30px;
    top: 8px;
    right: 10px;
`;

const PetItem = styled.div`
    padding: 10px 0px 10px 20px;
`;


const AddPetComponent = ({
    name, 
    kind, 
    species, 
    gender, 
    neutering, 
    birth, 
    petImage,
    onPetnameChanged,
    onKindChanged,
    onSpeciesChanged,
    onGenderChanged,
    onNeuteringChanged,
    onBirthChanged,
    onPetImageChanged,
    onPetAdded
}) => {

    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState('');
    const ref = useRef(null);
    const navigate = useNavigate();

    return (
        <Container>
            <div className='profile_part'>
                <CustomProfileImageInput file={petImage} onChange={onPetImageChanged}/>
            </div>
            <div className='title'>
                종류<span className='necessary'>*</span>
            </div>
            <div className='flex'>
                <SelectDiv selected={kind === 'dog'} onClick={() => onKindChanged('dog')}>강아지</SelectDiv>
                <SelectDiv selected={kind === 'cat'} onClick={() => onKindChanged('cat')}>고양이</SelectDiv>
            </div>
            <div className='title'>
                이름<span className='necessary'>*</span>
            </div>
            <Input type='text' value={name} onChange={e => onPetnameChanged(e.target.value)} maxLength={10}/>
            <div className='title'>
                성별<span className='necessary'>*</span>
            </div>
            <div className='flex'>
                <SelectDiv selected={gender === 'male'} onClick={() => onGenderChanged('male')}>수컷</SelectDiv>
                <SelectDiv selected={gender === 'female'} onClick={() => onGenderChanged('female')}>암컷</SelectDiv>
            </div>
            <div className='checkbox_part' onClick={() => onNeuteringChanged(!neutering) }>
                <CheckBox checked={neutering}>
                    <FaCheck />
                </CheckBox>
                중성화 여부
            </div>
            <div className='title'>
                품종<span className='necessary'>*</span>
            </div>
            <SpeciesDiv onClick={() => setOpen(true)}>
                {species}
                <div className='search'>
                    <IoMdSearch />
                </div>
            </SpeciesDiv>
            <BottomSheet open={open} snapPoints={({maxHeight}) => [maxHeight - 100, maxHeight-100]}>
                <InnerContent>
                    반려동물 품종 선택
                    <CloseBtn onClick={() => {
                        setOpen(false)
                        setFilter('')
                    }}>
                        <IoClose />
                    </CloseBtn>
                </InnerContent>
                <div style={{margin: '10px 20px'}}>
                    <Input type='text' value={filter} onChange={e => setFilter(e.target.value)}/>
                </div>
                {SpeciesList[kind].filter(
                    item => filter.length >= 1 
                        ? item.split(' ').join('').indexOf(filter) > -1 
                        : true).map(
                            item => <PetItem key={`${kind} ${item}`} onClick={() => {
                                onSpeciesChanged(item)
                                setOpen(false)
                                setFilter('')
                            }}>{item}</PetItem>)}
            </BottomSheet>

            <div className='title'>
                생일<span className='necessary'>*</span>
            </div>
            <Input type='text'  onChange={e => {
                const regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
                if (regex.test(e.target.value)) {
                    onBirthChanged(new Date(e.target.value));
                } else {
                    onBirthChanged(null);
                }
            }} placeholder='yyyy-mm-dd'/>
            <div className='title'>
                접종 목록
                <div className='additional'>Enter키를 기준으로 분류됩니다</div>
            </div>
            <Textarea ref={ref}/>
            <div className='submit_btn'>
                <CustomRoundDiv height={40} width={90} backgroundcolor={name && species && birth ? "#f02b70" : 'lightgray'} onClick={() => {
                    const vaccinelist = ref.current.value ? ref.current.value.split('\n') : []
                    if (name && species && birth) {
                        onPetAdded({
                            name: name,
                            kind: kind,
                            species: species,
                            gender: gender,
                            neutering: neutering,
                            birth: birth,
                            vaccineList: vaccinelist,
                            petImage: petImage
                        })
                        
                        navigate('/')
                        
                        onPetImageChanged(null)
                        onKindChanged('dog')
                        onPetnameChanged('')
                        onGenderChanged('male')
                        onNeuteringChanged(false)
                        onSpeciesChanged('')
                        onBirthChanged(null)
                    }
                }}>
                    등록
                </CustomRoundDiv>
            </div>
        </Container>
    );
};

export default AddPetComponent;