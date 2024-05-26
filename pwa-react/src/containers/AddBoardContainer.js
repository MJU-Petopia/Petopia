import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { onTitleChange, onContentChange, getFeedDetailAsync,addFeedAsync, editFeedAsync } from '../modules/BoardAddInfo';
import BoardAddComponent from '../components/Board/BoardAddComponent';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingComponent from '../components/Loading/LoadingComponent';

const AddBoardContainer = ({writer, title,loading, content, onTitleChange, onContentChange ,addFeedAsync,getFeedDetailAsync, editFeedAsync}) => {

    const param = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (param.id) {
            getFeedDetailAsync(param.id)
        }
    },[])
    
    useEffect(() => {
        if (writer) {
            if (writer !== Number(window.sessionStorage.getItem('id'))) {
                navigate(-1);
            }
        }
    },[writer])


    if (!loading) { return (
        <BoardAddComponent title={title} content={content} setTitle={onTitleChange} setContent={onContentChange} addFeedAsync={addFeedAsync} editFeedAsync={editFeedAsync}/>
    )} else {
        return (<LoadingComponent />)
    };
};

export default connect(({BoardAddInfo, Loading}) => ({
    title: BoardAddInfo.title,
    content: BoardAddInfo.content,
    writer: BoardAddInfo.writer,
    loading: Loading['BoardAddInfo/GET_FEED_DETAIL']
}),{
    addFeedAsync,
    onTitleChange,
    onContentChange,
    getFeedDetailAsync,
    editFeedAsync
})(AddBoardContainer);