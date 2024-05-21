import { createAction, handleActions } from "redux-actions";

const START_LOADING = 'Loading/START_LOADING';
const FINISH_LOADING = 'Loading/FINISH_LOADING';

export const startLoading = createAction(START_LOADING, type => type);
export const finishLoading = createAction(FINISH_LOADING, type => type);

const initialstate = {};

const Loading = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
        [FINISH_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: false,
        })
    }, initialstate
)

export default Loading;