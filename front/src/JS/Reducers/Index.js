import { combineReducers } from "redux";
import ContactReducer from "./Reducers";
const RootReducer = combineReducers({ ContactReducer });
export default RootReducer;
