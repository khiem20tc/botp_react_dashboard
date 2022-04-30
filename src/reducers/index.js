import { combineReducers } from "redux";
import generalReducer from "./general";
import userReducer from "./user";

const rootReducer = combineReducers({
  general: generalReducer,
  user: userReducer,
});

export default rootReducer;
