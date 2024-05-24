import { createAction, handleActions } from "redux-actions";

const ON_PET_ADDED = 'Profile/ON_PET_ADDED';
const ON_PET_DELETED = 'Profile/ON_PET_DELETED';
const ON_NAME_CHANGED = 'Profile/ON_NAME_CHANGED';

export const onPetAdded = createAction(ON_PET_ADDED, petdata => petdata);
export const onPetDeleted = createAction(ON_PET_DELETED, pet_id => pet_id);
export const onNameChanged = createAction(ON_NAME_CHANGED, name => name);

const initialstate = {
    name: 'default',
    email: 'example@example.com',
    pet: [
    ],
}

const Profile = handleActions(
    {
        [ON_PET_ADDED]: (state, action) => ({
            ...state,
            pet: state.pet.concat({...action.payload, id: state.number}),
            number: state.number+1
        }),
        [ON_PET_DELETED]: (state, action) => ({
            ...state,
            pet: state.pet.filter(petdata => petdata.id !== action.payload)
        }),
        [ON_NAME_CHANGED]: (state, action) => ({
            ...state,
            name: action.payload
        })
    }, initialstate
)

export default Profile;