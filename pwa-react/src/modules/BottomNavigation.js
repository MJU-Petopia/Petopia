import { createAction, handleActions } from "redux-actions";

const ON_TAB_CLICKED = 'BottomNavigation/ON_TAB_CLICkED';

export const onTabClicked = createAction(ON_TAB_CLICKED, page => page);

const initialstate = {
    tab: 'AI진단'
};

const BottomNavigation = handleActions(
    {
        [ON_TAB_CLICKED]: (state, action) => ({
            tab: action.payload
        })
    }, initialstate
);

export default BottomNavigation;