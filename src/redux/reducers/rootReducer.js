import { combineReducers } from "redux";
import CommonReducer from "./commonReducer";
import FilmReducer from "./filmReducer";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
  filmReducer: FilmReducer,
  commonReducer: CommonReducer,
  userReducer: UserReducer,
});

export default rootReducer;
