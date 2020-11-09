import { combineReducers } from "redux";
import bookingReducer from "./booking.Reducer";
import CinemaReducer from "./cinemaReducer";
import CommonReducer from "./commonReducer";
import FilmReducer from "./filmReducer";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
  filmReducer: FilmReducer,
  commonReducer: CommonReducer,
  userReducer: UserReducer,
  cinemaReducer: CinemaReducer,

  bookingReducer: bookingReducer,
});

export default rootReducer;
