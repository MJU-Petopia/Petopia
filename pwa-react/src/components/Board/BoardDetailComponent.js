import React, { useEffect } from 'react';
import styled from 'styled-components';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';
import { FaThumbsUp } from "react-icons/fa6";
import { FaComment } from "react-icons/fa6";
import BoardCommentcomponent from './BoardCommentcomponent';
import { IoSend } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import BoardOverlayComponent from './BoardOverlayComponent';


const Container = styled.div`
    margin: 55px 20px 0px 20px;
    box-sizing: border-box;

    .more {
        position: fixed;
        top: 13px;
        right: 10px;
        z-index: 3;
        font-size: 24px;
        font-weight: bold;
    }
`;

const ProfileWrapper = styled.div`
    padding: 20px 0px;
    width: 100%;
    display: flex;
    align-items: center;

    .additional {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        font-weight: 500;
    }
`;

const ContentWrapper = styled.div`
    font-size: 15px;
    width: 100%;
    font-weight: normal;
    margin-bottom: 20px;
`;

const FileWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    overflow-x: auto;
    gap: 10px;
    margin-bottom: 20px;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const FileItem = styled.div`
    height: 80px;
    width: 80px;
    border-radius: 12px;
    background-color: lightgray;
    background-position: center;
    background-size: cover;
    flex: 0 0 auto;
`;

const AdditionalWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 300;
    color: gray;
    margin-bottom: 10px;
    gap: 10px;

    .icon {
        margin-right: 3px;
        font-size: 17px;
    }

    .icon, span {
        vertical-align: middle;
        display: inline-block;
    }
`;

const InputWrapper = styled.div`
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    margin: 10px 0 20px 0;
    position: relative;
`;

const Input = styled.input`
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 12px;
    border: 1px solid lightgray;
    font-size: 15px;
    padding: 0 40px 0 10px;
    outline: none;

    &:focus {
        border-color: gray;
    }
`;

const InputBtn = styled.div`
    height: 100%;
    width: 40px;
    position: absolute;
    right: 0;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: gray;
`;

const BoardDetailComponent = ({comment, setComment, overlay, setOverlay}) => {

    const filelist = ['a','b','c','d','e','f','g','h','i'];
    // const filelist = []
    const commentList = [1,2,3,4,5];

    const onEditClicked = (() => {
        console.log('게시물 수정');
    })

    const onDeleteClicked = (() => {
        console.log('게시물 삭제')
    })

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
            <ProfileWrapper>
                <CustomRoundDiv height={50} width={50} borderradius={25} margin={'0px 10px 0 0'}/>
                <div className='additional'>
                    <div>이름</div>
                    <div>24/04/09 16:34</div>
                </div>
            </ProfileWrapper>
            <ContentWrapper>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </ContentWrapper>
            {filelist.length > 0 && 
                <FileWrapper>
                    {filelist.map(file => <FileItem key={file}/>)}
                </FileWrapper>}
            <AdditionalWrapper>
                <div>
                    <FaThumbsUp className='icon'/><span>0</span>
                </div>
                <div>
                    <FaComment className='icon'/><span>0</span>
                </div>
            </AdditionalWrapper>
            {commentList &&
                commentList.map(comment => {
                    const onEditClicked = (() => {
                        console.log(`댓글${comment} 수정`)
                    })
                    const onDeleteClicked = (() => {
                        console.log(`댓글${comment} 삭제`)
                    })

                    return (<div key={comment} style={{borderTop: '1px solid lightgray'}}>
                        <BoardCommentcomponent subList={comment === 2 && [2.1,2.2]} onEditClicked={onEditClicked} onDeleteClicked={onDeleteClicked}/>
                    </div>)
                })
            }
            <InputWrapper>
                <Input type='text' value={comment} onChange={e => setComment(e.target.value)} placeholder='comment input...'/>
                <InputBtn onClick={() => {}}>
                    <IoSend />
                </InputBtn>
            </InputWrapper>

            <div className='more' onClick={(e) => {
                e.stopPropagation()
                setOverlay(!overlay)
            }}> 
                <IoMdMore />
            </div>
            {overlay && <BoardOverlayComponent onEditClicked={onEditClicked} onDeleteClicked={onDeleteClicked}/>}
        </Container>
    );
};

export default BoardDetailComponent;