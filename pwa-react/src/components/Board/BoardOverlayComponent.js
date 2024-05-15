import React from 'react';
import styled from 'styled-components';
import { FaPencil } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";

const Overlays = styled.div`
    position: ${props => props.$isSub ? 'absolute' : 'fixed'};
    top: ${props => props.$isSub ? '25px' : '35px'};
    z-index: ${props => props.$isSub ? 2 : 3};
    right: ${props => props.$isSub ? '5px' : '15px'};
    border: 1px solid lightgray;
    background-color:white;
    color: gray;
    
    .edit, .delete {
        display: flex;
        padding: 10px;
        gap: 7px;

        span {
            font-size: 14px;
        }

        &:first-child {
            border-bottom: 1px solid lightgray;
        }
    }

    .delete {
        color: #f02b70;
    }
`;

const BoardOverlayComponent = ({onEditClicked, onDeleteClicked, isSub}) => {
    return (
        <Overlays $isSub={isSub}>
            <div className='edit' onClick={() => onEditClicked()}>
                <FaPencil/><span>수정</span>
            </div>
            <div className='delete' onClick={() => onDeleteClicked()}>
                <FaTrashCan /><span>삭제</span>
            </div>
        </Overlays>
    );
};

export default BoardOverlayComponent;