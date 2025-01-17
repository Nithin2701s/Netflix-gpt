import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        latestVideoTrailer: null,
        popularMovies: null,
        horrorMovies: null,
        romanticMovies:null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addLatestVideoTrailer: (state, action) => {
            state.latestVideoTrailer = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addHorrorMovies: (state, action) => {
            state.horrorMovies = action.payload
        },
        addRomanticMovies : (state,action)=>{
            state.romanticMovies = action.payload
        }
    }
})

export const { addNowPlayingMovies, addLatestVideoTrailer, addPopularMovies, addHorrorMovies, addRomanticMovies } = MoviesSlice.actions
export default MoviesSlice.reducer