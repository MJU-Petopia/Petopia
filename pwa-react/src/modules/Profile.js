import { createAction, handleActions } from "redux-actions";
import createRequestThunk from "../lib/createRequestThunk";
import { addPet, deletePet, deleteUser, editPet, editUser, getPetlist, logout } from "../lib/api";

const SET_USERDATA = 'Profile/SET_USERDATA';
const GET_PETLIST = 'Profile/GET_PETLIST';
const GET_PETLIST_SUCCESS = 'Profile/GET_PETLIST_SUCCESS';
const EDIT_PET = 'Profile/EDIT_PET';
const EDIT_PET_SUCCESS = 'Profile/EDIT_PET_SUCCESS';
const EDIT_USER = 'Profile/EDIT_USER';
const EDIT_USER_SUCCESS = 'Profile/EDIT_USER_SUCCESS';
const ADD_PET = 'Profile/ADD_PET';
const ADD_PET_SUCCESS = 'Profile/ADD_PET_SUCCESS';
const DELETE_PET = 'Profile/DELETE_PET';
const DELETE_PET_SUCCESS = 'Profile/DELETE_PET_SUCCESS';
const DELETE_USER = 'Profile/DELETE_USER';
const DELETE_USER_SUCCESS = 'Profile/DELETE_USER_SUCCESS';
const LOGOUT = 'Profile/LOGOUT';
const LOGOUT_SUCCESS = 'Profile/LOGOUT_SUCCESS';
const CHANGE_PROFILE_IMAGE = 'Profile/CHANGE_PROFILE_IMAGE';

export const getPetlistAsync = createRequestThunk(GET_PETLIST, getPetlist);
export const addPetAsync = createRequestThunk(ADD_PET, addPet);
export const editPetAsync = createRequestThunk(EDIT_PET, editPet);
export const deletePetAsync = createRequestThunk(DELETE_PET, deletePet);
export const deleteUserAsync = createRequestThunk(DELETE_USER, deleteUser);
export const editUserAsync = createRequestThunk(EDIT_USER, editUser);
export const logoutAsync = createRequestThunk(LOGOUT, logout);

export const setUserdata = createAction(SET_USERDATA, data => data);
export const changeProfileImage = createAction(CHANGE_PROFILE_IMAGE, data => data);

const initialstate = {
    name: 'default',
    email: 'example@example.com',
    gender: null,
    phone: null,
    pet: [],
    authenticated: false,
    profileIMG: null,
}

const Profile = handleActions(
    {
        [GET_PETLIST_SUCCESS]: (state, action) => ({
            ...state,
            pet: action.payload.data.data.content
        }),
        [ADD_PET_SUCCESS]: (state, action) => ({
            ...state,
            pet: state.pet.concat(action.payload.data.data)
        }),
        [SET_USERDATA]: (state, action) => ({
            ...state,
            name: action.payload.name,
            email: action.payload.email,
            gender: action.payload.gender,
            phone: action.payload.phone,
            authenticated: true,
        }),
        [EDIT_PET_SUCCESS]: (state, action) => ({
            ...state,
            pet: state.pet.map(p => p.id === action.payload.data.data.id ? {...action.payload.data.data} : p)
        }),
        [DELETE_PET_SUCCESS]: (state, action) => ({
            ...state
        }),
        [DELETE_USER_SUCCESS]: (state, action) => ({
            ...state,
            name: '',
            email: '',
            phone: '',
            gender: null,
            pet: [],
            authenticated: false
        }),
        [EDIT_USER_SUCCESS]: (state, action) => ({
            ...state,
            name: action.payload.data.data.name,
            phone: action.payload.data.data.phone,
        }),
        [LOGOUT_SUCCESS]: (state, action) => ({
            ...state,
            name: '',
            email: '',
            phone: '',
            gender: null,
            pet: [],
            authenticated: false
        }),
        [CHANGE_PROFILE_IMAGE]: (state, action) => ({
            ...state,
            profileIMG: action.payload,
        })
    }, initialstate
)

export default Profile;