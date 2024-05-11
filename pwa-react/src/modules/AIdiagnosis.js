import { createAction, handleActions } from "redux-actions";

const ON_SPECIES_CHANGED = 'AIdiagnosis/SPECIES';
const ON_BODYPART_CHANGED = 'AIdiagnosis/BODYPART';
const ON_FILE_CHANGED = 'AIdiagnosis/FILE';

export const onSpeciesChanged= createAction(ON_SPECIES_CHANGED, species => species);
export const onBodypartChanged = createAction(ON_BODYPART_CHANGED, bodypart => bodypart);
export const onFileChanged = createAction(ON_FILE_CHANGED, file => file);

const initialstate = {
    species: 'dog',
    bodypart: 'eye',
    file: null
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
        })
    },
    initialstate
);

export default AIdiagnosis