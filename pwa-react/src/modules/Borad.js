import { createAction, handleActions } from "redux-actions";

const ON_FEED_ADDED = 'Board/ON_FEED_ADDED';
const ON_FEED_DELETED = 'Board/ON_FEED_DELETED';

export const onFeedAdded = createAction(ON_FEED_ADDED, feed => feed);
export const onFeedDeleted = createAction(ON_FEED_DELETED, id => id);

const initialstate = {
    feedList: [],
}

const Board = handleActions(
    {
        [ON_FEED_ADDED]: (state, action) => ({
            ...state,
            feedList: state.feedList.concat(action.payload)
        }),
        [ON_FEED_DELETED]: (state, action) => ({
            ...state,
            feedList: state.feedList.filter(feed => feed.id !== action.payload)
        })
    }, initialstate
)

export default Board;