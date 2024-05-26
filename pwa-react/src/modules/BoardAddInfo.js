import { createAction, handleActions } from "redux-actions";
import createRequestThunk from "../lib/createRequestThunk";
import { getBoardDetail, addBoard, editBoard } from "../lib/api";

const ON_TITLE_CHANGE = 'BoardAddInfo/ON_TITLE_CHANGE';
const ON_CONTENT_CHANGE = 'BoardAddInfo/ON_CONTENT_CHANGE';
const GET_FEED_DETAIL = 'BoardAddInfo/GET_FEED_DETAIL';
const GET_FEED_DETAIL_SUCCESS = 'BoardAddInfo/GET_FEED_DETAIL_SUCCESS';
const ADD_FEED = 'BoardAddInfo/ADD_FEED';
const ADD_FEED_SUCCESS = 'BoardAddInfo/ADD_FEED_SUCCESS';
const EDIT_FEED = 'BoardAddInfo/EDIT_FEED';
const EDIT_FEED_SUCCESS = 'BoardAddInfo/EDIT_FEED_SUCCESS';

export const getFeedDetailAsync = createRequestThunk(GET_FEED_DETAIL, getBoardDetail);
export const addFeedAsync = createRequestThunk(ADD_FEED, addBoard)
export const editFeedAsync = createRequestThunk(EDIT_FEED, editBoard);

export const onTitleChange = createAction(ON_TITLE_CHANGE, title => title);
export const onContentChange = createAction(ON_CONTENT_CHANGE, content => content);

const initialstate = {
    title: '',
    content: '',
    writer: null,
}

const BoardAddInfo = handleActions(
    {
        [ON_TITLE_CHANGE]: (state, action) => ({
            ...state,
            title: action.payload
        }),
        [ON_CONTENT_CHANGE]: (state, action) => ({
            ...state,
            content: action.payload
        }),
        [GET_FEED_DETAIL_SUCCESS]: (state, action) => ({
            ...state,
            title: action.payload.data.data.title,
            content: action.payload.data.data.content,
            writer: action.payload.data.data.user.id,
        }),
        [ADD_FEED_SUCCESS]: (state, action) => ({
            title: '',
            content: '',
            writer: null
        }),
        [EDIT_FEED_SUCCESS]: (state, action) => ({
            title: '',
            content: '',
            writer: null
        }),
    }, initialstate
)

export default BoardAddInfo;