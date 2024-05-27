import React from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';
import { FaPencil } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import LoadingComponent from '../Loading/LoadingComponent';
import jaccardSimilarity from '../../lib/jaccardSimilarity';

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

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const BoardComponent = ({feedList, search, setSearch, timeCalculator, onAddBtnClicked, loadingBoard}) => {
    return (
        <div style={{margin: '110px 0px 55px 0', height: '50%'}}>
            <InputWrapper>
                <Input type='text' placeholder='Search..' value={search} onChange={e=> setSearch(e.target.value)}/>
            </InputWrapper>
            <Container>
                {loadingBoard && <LoadingComponent />}
                {!loadingBoard && feedList && feedList.filter(item => search ? jaccardSimilarity(search, item.title) >= 0.5 || jaccardSimilarity(search, item.content) >= 0.5 : item).map(item => <Link to={`/board/${item.id}`} key={item.id} ><BoardItem feed={item} timeCalculator={timeCalculator} /></Link>)}
            </Container>
            <AddBtn onClick={() => onAddBtnClicked()}>
                <FaPencil />
            </AddBtn>
        </div>
    );
};

export default BoardComponent;