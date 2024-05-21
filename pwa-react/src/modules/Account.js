import createRequestThunk from "../lib/createRequestThunk";
import { signIn } from "../lib/api";
import { handleActions } from "redux-actions";

const SIGN_IN = 'Account/SIGN_IN';
const SIGN_OUT = 'Account/SIGN_OUT';

export const signInAsync = createRequestThunk(SIGN_IN, signIn);

const initialstate = {
    user: null
}

const Account = handleActions(
    {
        [SIGN_IN]: (state, action) => ({
            ...state,
            user: action.payload
        }),
        [SIGN_OUT]: (state, action) => ({
            ...state,
            user: null
        })
    }, initialstate
)

export default Account;