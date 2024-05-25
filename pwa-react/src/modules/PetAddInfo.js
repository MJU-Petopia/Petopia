import { createAction, handleActions } from "redux-actions";
import createRequestThunk from "../lib/createRequestThunk";
import { getPetDetail } from "../lib/api";


const GET_PETDETAIL = 'PetAddInfo/GET_PETDETAIL';
const GET_PETDETAIL_SUCCESS = 'PetAddInfo/GET_PETDETAIL_SUCCESS';
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

export const getPetdetailAsync = createRequestThunk(GET_PETDETAIL, getPetDetail);


const initialstate = {
    name: '',
    kind: 'dog',
    species: null,
    gender: 'male',
    neutering: false,
    birth: '',
    petImage: null,
    vaccinationList: '',
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
        }),
        [GET_PETDETAIL_SUCCESS]: (state, action) => ({
            ...state,
            name: action.payload.data.data.name,
            kind: action.payload.data.data.petType === '강아지' ? 'dog' : 'cat',
            species: action.payload.data.data.kind,
            gender: action.payload.data.data.gender === '수컷' ? 'male' : 'female',
            neutering: action.payload.data.data.neutering === 1 ? true : false,
            birth: action.payload.data.data.birthday,
            vaccinationList: action.payload.data.data.vaccinationList,
        })
    }, initialstate
)

export default PetAddInfo;