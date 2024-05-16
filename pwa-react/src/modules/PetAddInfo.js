import { createAction, handleActions } from "redux-actions";

const ON_PETNAME_CHANGED = 'PetAddInfo/ON_PETNAME_CHANGED';
const ON_KIND_CHANGED = 'PetAddInfo/ON_KIND_CHANGED';
const ON_SPECIES_CHANGED = 'PetAddInfo/ON_SPECIES_CHANGED';
const ON_GENDER_CHANGED = 'PetAddInfo/ON_GENDER_CHANGED';
const ON_NEUTERING_CHANGED = 'PetAddInfo/ON_NEUTERING_CHANGED';
const ON_BIRTH_CHANGED = 'PetAddInfo/ON_BIRTH_CHANGED';
const ON_PETIMAGE_CHANGED = 'PetAddInfo/ON_PETIMAGE_CHANGED';

export const onPetnameChanged = createAction(ON_PETNAME_CHANGED, name => name);
export const onKindChanged = createAction(ON_KIND_CHANGED, kind => kind);
export const onSpeciesChanged = createAction(ON_SPECIES_CHANGED, species => species);
export const onGenderChanged = createAction(ON_GENDER_CHANGED, gender => gender);
export const onNeuteringChanged = createAction(ON_NEUTERING_CHANGED, bool => bool);
export const onBirthChanged = createAction(ON_BIRTH_CHANGED, date => date);
export const onPetImageChanged = createAction(ON_PETIMAGE_CHANGED, file => file);

const initialstate = {
    name: '',
    kind: 'dog',
    species: null,
    gender: 'male',
    neutering: false,
    birth: '',
    petImage: null,
}

const PetAddInfo = handleActions(
    {
        [ON_PETNAME_CHANGED]: (state, action) => ({
            ...state,
            name: action.payload
        }),
        [ON_KIND_CHANGED]: (state, action) => ({
            ...state,
            kind: action.payload
        }),
        [ON_SPECIES_CHANGED]: (state, action) => ({
            ...state,
            species: action.payload
        }),
        [ON_GENDER_CHANGED]: (state, action) => ({
            ...state,
            gender: action.payload,
        }),
        [ON_NEUTERING_CHANGED]: (state, action) => ({
            ...state,
            neutering: !state.neutering
        }),
        [ON_BIRTH_CHANGED]: (state, action) => ({
            ...state,
            birth: action.payload,
        }),
        [ON_PETIMAGE_CHANGED]: (state, action) => ({
            ...state,
            petImage: action.payload
        })
    }, initialstate
)

export default PetAddInfo;