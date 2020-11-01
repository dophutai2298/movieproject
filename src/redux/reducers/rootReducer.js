import { combineReducers } from "redux";
import CinemaReducer from "./cinemaReducer";
import CommonReducer from "./commonReducer";
import FilmReducer from "./filmReducer";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
  filmReducer: FilmReducer,
  commonReducer: CommonReducer,
  userReducer: UserReducer,
  cinemaReducer: CinemaReducer,
});

export default rootReducer;
