import { handleActions } from "redux-actions";
import { getUserdata } from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

const GET_USERDATA = 'User/GET_USERDATA';
const GET_USERDATA_SUCCESS = 'User/GET_USERDATA_SUCCESS';

export const getUserdataAsync = createRequestThunk(GET_USERDATA, getUserdata);

const initialstate = {
    user: null,
    authenticated: true,
};

const User = handleActions(
    {
        [GET_USERDATA_SUCCESS]: (state, action) => ({
            ...state,
            user: action.payload.data.data,
            authenticated: true
        })
    }, initialstate
)

export default User