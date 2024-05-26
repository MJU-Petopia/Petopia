import { createAction, handleActions } from "redux-actions";
import createRequestThunk from "../lib/createRequestThunk";
import {addComment, deleteBoard, deleteComment, getBoard, getBoardDetail} from '../lib/api';

const GET_FEED = 'Board/GET_FEED';
const GET_FEED_SUCCESS = 'Board/GET_FEED_SUCCESS';
const GET_FEED_DETAIL = 'Board/GET_FEED_DETAIL';
const GET_FEED_DETAIL_SUCCESS = 'Board/GET_FEED_DETAIL_SUCCESS';
const DELETE_FEED = 'Board/DELETE_FEED';
const ADD_COMMENT = 'Board/ADD_COMMENT';
const DELETE_COMMENT = 'Board/DELETE_COMMENT';

const ADD_COMMENT_ACTION = 'Board/ADD_COMMENT_ACTION';
const DELETE_COMMENT_ACTION = 'Board/DELETE_COMMENT_ACTION';
const ON_INPUT_CHANGE = 'Board/ON_INPUT_CHANGE';

export const getFeedAsync = createRequestThunk(GET_FEED, getBoard)
export const getFeedDetailAsync = createRequestThunk(GET_FEED_DETAIL, getBoardDetail);
export const deleteFeedAsync = createRequestThunk(DELETE_FEED, deleteBoard);
export const addCommentAsync = createRequestThunk(ADD_COMMENT, addComment);
export const deleteCommentAsync = createRequestThunk(DELETE_COMMENT, deleteComment);

export const addCommentAction =createAction(ADD_COMMENT_ACTION, data => data);
export const deleteCommentAction = createAction(DELETE_COMMENT_ACTION, id => id);
export const onInputChange = createAction(ON_INPUT_CHANGE, input => input)

const initialstate = {
    feedList: [],
    feed: null,
    comments: [],
    input: ''
}

const Board = handleActions(
    {
        [GET_FEED_SUCCESS]: (state, action) => ({
            ...state,
            feedList: action.payload.data.data.content
        }),
        [GET_FEED_DETAIL_SUCCESS]: (state, action) => ({
            ...state,
            feed: action.payload.data.data,
            comments: action.payload.data.data.comments.map(item => ({...item, user: {id: item.user.id, name: item.user.name}}))
        }),
        [ON_INPUT_CHANGE]: (state, action) => ({
            ...state,
            input: action.payload
        }),
        [ADD_COMMENT_ACTION]: (state, action) => ({
            ...state,
            comments: state.comments.reverse().concat(action.payload).reverse(),
            input: '',
        }),
        [DELETE_COMMENT_ACTION]: (state, action) => ({
            ...state,
            comments: state.comments.filter(comment => comment.id !== action.payload)
        })
    }, initialstate
)

export default Board;