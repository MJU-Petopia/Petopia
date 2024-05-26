import { createAction, handleActions } from "redux-actions";
import createRequestThunk from "../lib/createRequestThunk";
import { getScheduleList, addSchedule } from "../lib/api";

const GET_SCHEDULE_LIST = 'VaccineSchedule/GET_SCHEDULE_LIST';
const GET_SCHEDULE_LIST_SUCCESS = 'VaccineSchedule/GET_SCHEDULE_LIST_SUCCESS';
const ADD_SCHEDULE = 'VaccineSchedule/ADD_SCHEDULE';
const ADD_SCHEDULE_SUCCESS = 'VaccineSchedule/ADD_SCHEDULE_SUCCESS';

const ON_DATE_CHANGED = 'VaccineSchedule/ON_DATE_CHANGED';
const ON_PET_CHANGED = 'VaccineSchedule/ON_PET_CHANGED';
const ON_VACCINE_CHANGED = 'VaccineSchedule/ON_VACCINE_CHANGED';
const ON_TERM_CHANGED = 'VaccineSchedule/ON_TERM_CHANGE';
const ON_ENDDATE_CHANGED = 'VaccineSchedule/ON_ENDDATE_CHANGED';
const ON_FILTER_CHANGED = 'VaccineSchedule/ON_FILTER_CHANGED';
const RESETTING = 'VaccineSchedule/RESETTING';

export const getScheduleListAsync = createRequestThunk(GET_SCHEDULE_LIST, getScheduleList);
export const addScheduleAsync = createRequestThunk(ADD_SCHEDULE, addSchedule);

export const onDateChanged = createAction(ON_DATE_CHANGED,date => date);
export const onPetChanged = createAction(ON_PET_CHANGED, pet => pet);
export const onVaccineChanged = createAction(ON_VACCINE_CHANGED, vaccine => vaccine);
export const onTermChagned = createAction(ON_TERM_CHANGED, std_term => Number(std_term));
export const onEnddateChanged = createAction(ON_ENDDATE_CHANGED, enddate => Number(enddate));
export const onFilterChanged = createAction(ON_FILTER_CHANGED, id => id);
export const resetting = createAction(RESETTING);

const initialstate = {
    schedule : [],
    start_date: new Date(),
    end_date: null,
    pet_id: null,
    vaccine_name: null,
    std_term: null,
    filter_id: null,
}

const VaccineSchedule = handleActions(
    {
        [GET_SCHEDULE_LIST_SUCCESS]: (state, action) => ({
            ...state,
            schedule: action.payload.data.data.content
        }),
        [ADD_SCHEDULE_SUCCESS]: (state, action) => ({
            ...state,
            schedule: state.schedule.concat(action.payload.data.data)
        }),
        [ON_DATE_CHANGED]: (state, action) => ({
            ...state,
            start_date: action.payload
        }),
        [ON_PET_CHANGED]: (state, action) => ({
            ...state,
            pet_id: action.payload
        }),
        [ON_VACCINE_CHANGED]: (state, action) => ({
            ...state,
            vaccine_name: action.payload
        }),
        [ON_TERM_CHANGED]: (state, action) => ({
            ...state,
            std_term: action.payload
        }),
        [ON_ENDDATE_CHANGED]: (state, action) => ({
            ...state,
            end_date: action.payload
        }),
        [ON_FILTER_CHANGED]: (state, action) => ({
            ...state,
            filter_id: state.filter_id === action.payload ? null : action.payload,
        }),
        [RESETTING]: (state, action) => ({
            ...state,
            start_date: new Date(),
            end_date: null,
            pet_id: null,
            vaccine_name: null,
            std_term: null,
            filter_id: null,
        })
    }, initialstate
)

export default VaccineSchedule;