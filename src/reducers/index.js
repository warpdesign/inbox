import { combineReducers } from "redux";
import { messages } from "./messages";
import { appStatus } from "./appStatus";

export default combineReducers({
  messages,
  appStatus
});
