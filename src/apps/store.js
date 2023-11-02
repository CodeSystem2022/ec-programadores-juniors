import { configureStore } from "@reduxjs/toolkit";
// funcion que permite crear el store
// Reducers
import userReducer from '../redux/reducers/userSlice'

export default configureStore({
    reducer: {
        user: userReducer,
    }
})