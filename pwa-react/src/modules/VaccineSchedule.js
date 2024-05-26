import { createAction, handleActions } from "redux-actions";

const ON_SCHEDULE_ADDED = 'VaccineSchedule/ON_SCHEDULE_ADDED';
const ON_SCHEDULE_DELETED = 'VaccineSchedule/ON_SCHEDULE_DELETED';
const ON_DATE_CHANGED = 'VaccineSchedule/ON_DATE_CHANGED';
const ON_PET_CHANGED = 'VaccineSchedule/ON_PET_CHANGED';
const ON_VACCINE_CHANGED = 'VaccineSchedule/ON_VACCINE_CHANGED';
const ON_TERM_CHANGED = 'VaccineSchedule/ON_TERM_CHANGE';
const ON_ENDDATE_CHANGED = 'VaccineSchedule/ON_ENDDATE_CHANGED';

export const onScheduleAdded = createAction(ON_SCHEDULE_ADDED, info => info);
export const onScheduleDeleted = createAction(ON_SCHEDULE_DELETED, id => id);
export const onDateChanged = createAction(ON_DATE_CHANGED,date => date);
export const onPetChanged = createAction(ON_PET_CHANGED, pet => pet);
export const onVaccineChanged = createAction(ON_VACCINE_CHANGED, vaccine => vaccine);
export const onTermChagned = createAction(ON_TERM_CHANGED, std_term => Number(std_term));
export const onEnddateChanged = createAction(ON_ENDDATE_CHANGED, enddate => Number(enddate));

const initialstate = {
    schedule : [],
    start_date: new Date(),
    end_date: null,
    pet_id: null,
    vaccine_name: null,
    std_term: null,
    
}

const VaccineSchedule = handleActions(
    {
        [ON_SCHEDULE_ADDED]: (state, action) => ({
            ...state,
            schedule: state.schedule.concat(action.payload).toSorted((a,b) => a.date - b.date)
        }),
        [ON_SCHEDULE_DELETED]: (state, action) => ({
            ...state,
            schedule: state.schedule.filter(item => item.schedule_id !== action.payload)
        }),
        [ON_DATE_CHANGED]: (state, action) => ({
            ...state,
            start_date: new Date(action.payload)
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
        [ON_ENDDATE_CHANGED]: (state, action) => {
            if (action.payload) {
                const date = new Date(state.start_date.getTime())
                date.setMonth(date.getMonth() + action.payload)
                return {
                    ...state,
                    end_date: date
                }
            } else {
                return {
                    ...state,
                    end_date:null
                }
            }
        }
    }, initialstate
)

export default VaccineSchedule;