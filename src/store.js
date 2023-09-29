import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    // applyMiddleware(...middleware) // Activar en prod
    composeWithDevTools(applyMiddleware(...middleware)) // Activar en dev
);

export default store;