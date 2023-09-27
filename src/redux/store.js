import { compose, createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

var store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
