import { combineReducers } from "redux";
import generalReducer from "./general";
import identityReducer from "./identity";
import modalReducer from "./modal";
import provenanceReducer from "./provenance";
import userReducer from "./user";

const rootReducer = combineReducers({
  user: userReducer,
  identity: identityReducer,
  provenance: provenanceReducer,
  general: generalReducer,
  modal: modalReducer,
});

export default rootReducer;
