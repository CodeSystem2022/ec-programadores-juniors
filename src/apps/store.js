// Acá se configura el store 
import { configureStore } from "@reduxjs/toolkit";

// permite almacenar los valores de manera local
import storage from "redux-persist/lib/storage";
// multiples reducers
import { combineReducers } from "@reduxjs/toolkit";
// para almacenar reducers
import { persistReducer } from "redux-persist";
// midleware que comunica toolkit con persist
import thunk from "redux-thunk";
// Reducers
import userReducer from '../redux/reducers/userSlice';
import cartReducer from '../redux/reducers/cartSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user']
};

// obj que almacena los reducers a persistir
const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})