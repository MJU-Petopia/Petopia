import React, { useState,useEffect} from 'react';
import styled from 'styled-components';
import BoardOverlayComponent from './BoardOverlayComponent.js'
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';
import { FaThumbsUp } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";
import profile from '../../images/default_profile.png';

const Container = styled.div`
    padding: 5px 0;
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

const BoardCommentcomponent = ({dateFormmater, comment, onDeleteClicked}) => {

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
        <Container>
            <div className='header'>
                <div className='profile_part'>
                    <CustomRoundDiv height={18} width={18} borderradius={10} margin={'0 5px 0 0'} backgroundimage={profile}/>
                    <div className='name'>{comment.user.name}</div>
                    <div className='date'>{dateFormmater(comment.createDate)}</div>
                </div>
                <div className='additional_part'>
                    <FaThumbsUp />
                    {comment.user.id === Number(window.sessionStorage.getItem('id')) && <IoMdMore onClick={e => {
                        e.stopPropagation();
                        setOverlay(!overlay);
                    }}/>}
                </div>
            </div>
            <div className='body'>
                {comment.comment}
            </div>
            <div className='footer'>
                <div>
                    <FaThumbsUp className='icon'/><span>0</span>
                </div>
            </div>
            
            {overlay && <BoardOverlayComponent isSub={true} onDeleteClicked={onDeleteClicked}/>}
        </Container>
    );
};

export default React.memo(BoardCommentcomponent);