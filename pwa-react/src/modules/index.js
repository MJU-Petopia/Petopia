import { combineReducers } from "redux";
import AIdiagnosis from "./AIdiagnosis";
import BottomNavigation from "./BottomNavigation";
import VaccineSchedule from "./VaccineSchedule";
import Profile from "./Profile";
import PetAddInfo from "./PetAddInfo";
import Board from "./Borad";
import Loading from "./Loading";
import User from "./User";

const rootReducer = combineReducers({
    AIdiagnosis,
    BottomNavigation,
    VaccineSchedule,
    Profile,
    PetAddInfo,
    Board,
    Loading,
    User,
});

export default rootReducer