import React from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';
import { FaPencil } from "react-icons/fa6";
import { Link } from 'react-router-dom';


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

const InputWrapper = styled.div`
    width: 100%;
    height: 55px;
    position: fixed;
    top: 55px;
    left: 0;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid lightgray;
`;

const AddBtn = styled.div`
    position: fixed;
    height: 50px;
    width: 50px;
    background-color: #f02b70;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    bottom: 70px;
    right: 15px;
`;

const array = Array.from({length: 50}, (v,i) => i+1);

const BoardComponent = ({feedList, search, setSearch, timeCalculator, onAddBtnClicked}) => {
    return (
        <div style={{margin: '110px 0px 55px 0'}}>
            <InputWrapper>
                <Input type='text' placeholder='Search..'/>
            </InputWrapper>
            {array.map(item => <Link to={`/board/${item}`} key={item} ><BoardItem timeCalculator={timeCalculator} /></Link>)}
            <AddBtn onClick={() => onAddBtnClicked()}>
                <FaPencil />
            </AddBtn>
        </div>
    );
};

export default BoardComponent;