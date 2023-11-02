import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// funcion que permite crear el store
// Reducers
import userReducer from '../redux/reducers/userSlice'

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
    reducer: {
        user: persistedReducer,
    }
})

const persistor = persistStore(store);

export { store, persistor };