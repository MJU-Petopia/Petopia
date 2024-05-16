import React, { useState,useEffect} from 'react';
import styled from 'styled-components';
import BoardOverlayComponent from './BoardOverlayComponent.js'
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';
import { FaThumbsUp } from "react-icons/fa6";
import { FaComment } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";

const Container = styled.div`
    padding: 5px 0;
    margin-left: ${props => props.sub && '20px'};
    position: relative;

    .header {
        display: flex;
        justify-content: space-between;

        .profile_part, .additional_part {
            display: flex;
            align-items: center;

            .name {
                font-size: 14px;
                font-weight: 500;
                margin-right: 10px;
            }

            .date {
                font-size: 12px;
                font-weight: 400;
                color: gray;
            }
        }

        .additional_part {
            font-size: 14px;
            gap: 10px;
            color: gray;
        }
    }

    .body {
        margin: 5px 0 2px 0;
        font-size: 15px;
    }

    .footer {
        font-size: 13px;
        font-weight: 300;
        color: gray;

        .icon {
            margin-right: 3px;
        }

        .icon, span {
            vertical-align: middle;
            display: inline-block;
        }
    }
`;

const BoardCommentcomponent = ({numid, sub, isShort, subList, onDeleteClicked, onEditClicked}, ref) => {

    const [overlay, setOverlay] = useState(false);

    useEffect(() => {
        const onClick = () => {
            if (overlay) {
                setOverlay(false);
            }
        }

        window.addEventListener("click", onClick);

        return () => {
            window.removeEventListener("click", onClick);
        }
    },[overlay])

    return (
        <Container sub={sub}>
            <div className='header'>
                <div className='profile_part'>
                    <CustomRoundDiv height={18} width={18} borderradius={10} margin={'0 5px 0 0'}/>
                    <div className='name'>이름</div>
                    <div className='date'>24/04/09 16:35</div>
                </div>
                <div className='additional_part'>
                    <FaThumbsUp />
                    {!sub && <FaComment />}
                    <IoMdMore onClick={e => {
                        e.stopPropagation();
                        setOverlay(!overlay);
                    }}/>
                </div>
            </div>
            <div className='body'>
                {!isShort ? '짧은내용' : '긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용긴내용'}
            </div>
            <div className='footer'>
                <div>
                    <FaThumbsUp className='icon'/><span>0</span>
                </div>
            </div>
            {subList && subList.map(sub => {
                const onEditClicked = (() => {
                    console.log(`대댓글${sub} 수정`)
                })
                const onDeleteClicked = (() => {
                    console.log(`대댓글${sub} 삭제`)
                })
                return <BoardCommentcomponent key={sub} sub={1} onEditClicked={onEditClicked} onDeleteClicked={onDeleteClicked}/>
            })}
            {overlay && <BoardOverlayComponent isSub={true} onEditClicked={onEditClicked} onDeleteClicked={onDeleteClicked}/>}
        </Container>
    );
};

export default React.memo(BoardCommentcomponent);