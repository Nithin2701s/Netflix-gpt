import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice'
import MoviesReducer from './MoviesSlice'
import GPTReducer from './GPTSlice'
const appStore = configureStore({
    reducer:{
        user:UserReducer,
        movies:MoviesReducer,
        gpt:GPTReducer,
    }
})

export default appStore