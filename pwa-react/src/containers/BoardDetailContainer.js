import React, { useEffect, useState } from 'react';
import BoardDetailComponent from '../components/Board/BoardDetailComponent';
import { connect } from 'react-redux';
import { deleteFeedAsync, getFeedDetailAsync, onInputChange, addCommentAction, addCommentAsync, deleteCommentAction, deleteCommentAsync} from '../modules/Borad';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../components/Loading/LoadingComponent';


const BoardDetailContainer = ({comments, input, feed, loading, getFeedDetailAsync, deleteFeedAsync, onInputChange, addCommentAction, addCommentAsync, deleteCommentAction, deleteCommentAsync}) => {

    const [overlay, setOverlay] = useState(false);
    const params = useParams();

    useEffect(() => {
        getFeedDetailAsync(params.id)
    },[getFeedDetailAsync, params.id])

    const dateFormatter = date => {
        const d = new Date(date);
        
        return `${d.getFullYear() % 100}/${d.getMonth()+1 < 10 ? `0${d.getMonth()+1}` :d.getMonth()+1}/${d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()} ${d.getHours() < 10 ? `0${d.getHours()}` : d.getHours()}:${d.getMinutes() < 9 ? `0${d.getMinutes()}` : d.getMinutes()}`;
    }

    return (
        <>
            {loading && <LoadingComponent />}
            {!loading && feed && <BoardDetailComponent
                dateFormatter={dateFormatter}
                feed={feed}
                commentlist={comments}
                comment={input}
                deleteCommentAction={deleteCommentAction}
                deleteCommentAsync={deleteCommentAsync}
                addCommentAction={addCommentAction}
                addCommentAsync={addCommentAsync}
                setComment={onInputChange}
                overlay={overlay}
                setOverlay={setOverlay}
                deleteFeedAsync={deleteFeedAsync}
        />}
        </>
    );
};

export default connect(({Board, Loading}) => ({
    feed: Board.feed,
    comments: Board.comments,
    input: Board.input,
    loading: Loading['Board/GET_FEED_DETAIL']
}),{
    getFeedDetailAsync,
    deleteFeedAsync,
    onInputChange,
    addCommentAction,
    addCommentAsync,
    deleteCommentAction,
    deleteCommentAsync
})(BoardDetailContainer);