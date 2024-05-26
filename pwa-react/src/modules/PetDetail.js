import createRequestThunk from "../lib/createRequestThunk";
import { getPetDetail } from "../lib/api";
import { handleActions } from "redux-actions";

const GET_PETDETAIL = 'PetDetail/GET_PETDETAIL';
const GET_PETDETAIL_SUCCESS = 'PetDetail/GET_PETDETAIL_SUCCESS';

export const getPetdetailAsync = createRequestThunk(GET_PETDETAIL, getPetDetail);

const initialstate = {
    petType: null,
    name: '',
    gender: '수컷',
    neutering: 0,
    kind: null,
    birthday: '',
    vaccinationList: ''
}

const PetDetail = handleActions(
    {
        [GET_PETDETAIL_SUCCESS]: (state, action) => ({
            ...state,
            petType: action.payload.data.data.petType,
            name: action.payload.data.data.name,
            gender: action.payload.data.data.gender,
            neutering: action.payload.data.data.neutering,
            kind: action.payload.data.data.kind,
            birthday: action.payload.data.data.birthday,
            vaccinationList: action.payload.data.data.vaccinationList,
        })
    }, initialstate
)

export default PetDetail;