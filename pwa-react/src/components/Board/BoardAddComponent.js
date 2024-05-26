import React from 'react';
import styled from 'styled-components';
import CustomMultipleFileInput from '../CustomComponents/CustomMultipleFileInput';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    margin: 75px 20px 0px 20px;

    .label {
        color: gray;
        font-size: 15px;
    }

     > input, > textarea {
        margin-bottom: 20px;
    }
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

const SubButtonWrapper = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;

const BoardAddComponent = ({title, content, setTitle, setContent, addFeedAsync, editFeedAsync}) => {

    const navigate = useNavigate()

    return (
        <Container>
            <div className='label'>제목</div>
            <Input type='text' maxLength={20} value={title} onChange={e => setTitle(e.target.value)}/>
            <div className='label'>내용</div>
            <Textarea maxLength={300} value={content} onChange={e => setContent(e.target.value)}/>
            {/* <div className='label'>사진</div>
            <CustomMultipleFileInput file={file} setFile={setFile}/> */}
            <SubButtonWrapper>
                <CustomRoundDiv height={40} width={90} backgroundcolor={title && content ? '#f02b70' : 'lightgray'} onClick={async () => {
                    if (title && content) {
                        const data = {
                            "title": title,
                            "content": content
                        }
                        if (window.location.pathname.search('edit') > 0){
                            const id = window.location.pathname.split('/').pop();
                            await editFeedAsync([id, data]);
                            navigate(-1);
                        } else {
                            const id = window.sessionStorage.getItem('id')
                            await addFeedAsync([id, data]);
                            navigate('/')
                        }
                    } 
                }}>
                    완료
                </CustomRoundDiv>
            </SubButtonWrapper>
        </Container>
    );
};

export default BoardAddComponent;