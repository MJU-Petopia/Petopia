import { createAction, handleActions } from "redux-actions";
import createRequestThunk from "../lib/createRequestThunk";
import {addBoard, getBoard, getBoardDetail} from '../lib/api';

const GET_FEED = 'Board/GET_FEED';
const GET_FEED_SUCCESS = 'Board/GET_FEED_SUCCESS';
const GET_FEED_DETAIL = 'Board/GET_FEED_DETAIL';
const GET_FEED_DETAIL_SUCCESS = 'Board/GET_FEED_DETAIL_SUCCESS';
const ADD_FEED = 'Board/ADD_FEED';
const ADD_FEED_SUCCESS = 'Board/ADD_FEED_SUCCESS';
const ON_FEED_DELETED = 'Board/ON_FEED_DELETED';

export const getFeedAsync = createRequestThunk(GET_FEED, getBoard)
export const getFeedDetailAsync = createRequestThunk(GET_FEED_DETAIL, getBoardDetail);
export const addFeedAsync = createRequestThunk(ADD_FEED, addBoard)
export const onFeedDeleted = createAction(ON_FEED_DELETED, id => id);

const initialstate = {
    feedList: [],
    feed: null,
}

const Board = handleActions(
    {
        [GET_FEED_SUCCESS]: (state, action) => ({
            ...state,
            feedList: action.payload.data.data.content
        }),
        [GET_FEED_DETAIL_SUCCESS]: (state, action) => ({
            ...state,
            feed: action.payload.data.data
        }),
        [ADD_FEED_SUCCESS]: (state, action) => ({
            ...state,
            feedList: state.feedList.reverse().concat(action.payload).reverse()
        }),
        [ON_FEED_DELETED]: (state, action) => ({
            ...state,
            feedList: state.feedList.filter(feed => feed.id !== action.payload)
        })
    }, initialstate
)

export default Board;