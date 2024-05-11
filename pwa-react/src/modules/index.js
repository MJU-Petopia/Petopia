import { combineReducers } from "redux";
import AIdiagnosis from "./AIdiagnosis";
import BottomNavigation from "./BottomNavigation";
import VaccineSchedule from "./VaccineSchedule";

const rootReducer = combineReducers({
    AIdiagnosis,
    BottomNavigation,
    VaccineSchedule
});

export default rootReducer