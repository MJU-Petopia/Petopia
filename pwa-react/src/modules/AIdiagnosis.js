import { createAction, handleActions } from "redux-actions";
import createRequestThunk from "../lib/createRequestThunk";
import { getResult } from "../lib/api";

const ON_SPECIES_CHANGED = 'AIdiagnosis/SPECIES';
const ON_BODYPART_CHANGED = 'AIdiagnosis/BODYPART';
const ON_FILE_CHANGED = 'AIdiagnosis/FILE';
const GET_RESULT = 'AIdiagnosis/GET_RESULT';
const GET_RESULT_SUCCESS = 'AIdiagnosis/GET_RESULT_SUCCESS';
const RESETTING = 'AIdiagnosis/RESETTING';

export const onSpeciesChanged= createAction(ON_SPECIES_CHANGED, species => species);
export const onBodypartChanged = createAction(ON_BODYPART_CHANGED, bodypart => bodypart);
export const onFileChanged = createAction(ON_FILE_CHANGED, file => file);
export const resetting = createAction(RESETTING);

export const getResultAsync = createRequestThunk(GET_RESULT, getResult);


const initialstate = {
    species: 'dog',
    bodypart: 'eye',
    file: null,
    result: null,
}

const AIdiagnosis = handleActions(
    {
        [ON_SPECIES_CHANGED]: (state, action) => ({
            ...state,
            species: action.payload
        }),
        [ON_BODYPART_CHANGED]: (state, action) => ({
            ...state,
            bodypart: action.payload
        }),
        [ON_FILE_CHANGED]: (state, action) => ({
            ...state,
            file: action.payload
        }),
        [GET_RESULT_SUCCESS]: (state, action) => ({
            ...state,
            result: action.payload.data
        }),
        [RESETTING]: (state, action) => ({
            species: 'dog',
            bodypart: 'eye',
            file: null,
            result: null,
        }),
    },
    initialstate
);

export default AIdiagnosis