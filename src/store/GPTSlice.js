import { createSlice } from "@reduxjs/toolkit";


const GPTSlice = createSlice({
    name:'gpt',
    initialState:{
        showGPT:false,
        langId:'en',
        searchResults:null,
        movieResults:null
    },
    reducers:{
        toggleGPT : (state)=>{
          state.showGPT = !state.showGPT
        },
        changeLang : (state,action)=>{
          state.langId = action.payload
        },
        addSearchResult : (state,action)=>{
         state.searchResults = action.payload
        },
        addMovieResult : (state,action)=>{
          state.movieResults = action.payload
        }
    }
})
export const {toggleGPT, changeLang, addSearchResult, addMovieResult} = GPTSlice.actions;
export default GPTSlice.reducer;