import { combineReducers } from "redux";
import AIdiagnosis from "./AIdiagnosis";
import BottomNavigation from "./BottomNavigation";
import VaccineSchedule from "./VaccineSchedule";
import Profile from "./Profile";
import PetAddInfo from "./PetAddInfo";
import Board from "./Borad";

const rootReducer = combineReducers({
    AIdiagnosis,
    BottomNavigation,
    VaccineSchedule,
    Profile,
    PetAddInfo,
    Board
});

export default rootReducer