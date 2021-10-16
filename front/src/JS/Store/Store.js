import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "../Reducers/Index";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(RootReducer, composeEnhancer(applyMiddleware(thunk)));
export default Store;
