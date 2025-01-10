import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies : null,
        latestVideoTrailer:null,
        popularMovies: null,
    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
           state.nowPlayingMovies = action.payload
        },
        addLatestVideoTrailer : (state,action)=>{
            state.latestVideoTrailer = action.payload
        },
        addPopularMovies : (state,action)=>{
          state.popularMovies = action.payload
        }
    }
})

export const {addNowPlayingMovies, addLatestVideoTrailer,addPopularMovies} = MoviesSlice.actions
export default MoviesSlice.reducer