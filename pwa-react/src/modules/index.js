import { combineReducers } from "redux";
import AIdiagnosis from "./AIdiagnosis";
import BottomNavigation from "./BottomNavigation";
import VaccineSchedule from "./VaccineSchedule";
import Profile from "./Profile";
import PetAddInfo from "./PetAddInfo";
import Board from "./Borad";
import Loading from "./Loading";
import PetDetail from "./PetDetail";
import BoardAddInfo from "./BoardAddInfo";

const rootReducer = combineReducers({
    AIdiagnosis,
    BottomNavigation,
    VaccineSchedule,
    Profile,
    PetAddInfo,
    Board,
    Loading,
    PetDetail,
    BoardAddInfo
});

export default rootReducer