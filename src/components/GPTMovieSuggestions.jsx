import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {API_OPTIONS, TMDB_MOVIE_LIST_URL} from '../utils/constants'
import { addMovieResult } from '../store/GPTSlice';
import MovieList from './MovieList'
const GPTMovieSuggestions = () => {
    const {searchResults,movieResults} = useSelector(state=> state.gpt);
    const dispatch = useDispatch();
    const getmoviesList = async(movie)=>{
        const response = await fetch(TMDB_MOVIE_LIST_URL+'search/movie?query='+movie+'&include_adult=true&language=en-US&page=1',API_OPTIONS)
        const json  = await response.json()
        return json.results;
    }
    const handleMovies = async()=>{
       const promiseList = searchResults?.map(movie=>getmoviesList(movie))
       const moviesList = await Promise.all(promiseList)
       dispatch(addMovieResult(moviesList))
    }
    useEffect(()=>{
        handleMovies()
    })
    if(searchResults == null || movieResults == null || movieResults?.[0].length == 0) return (
      <div className='w-11/12 md:w-1/2 mx-auto my-5 md:my-10 p-3 md:p-5 shadow-lg bg-black bg-opacity-50'>
        <h1 className='text-white text-lg md:text-xl font-semibold  text-center'> Find movies you like🙏</h1>
      </div>
    );
  return (
    <div className='my-10 p-4 bg-black bg-opacity-35'>
       <div className='my-4 pl-4'>
        <h1 className='text-white font-semibold text-2xl' >Search Results</h1>
       </div>
    <div className='scrollbar-none flex flex-wrap justify-start'>
      {movieResults.map((movie,index)=>
      <>
        <MovieList key={index} movieList={movie} />
      </>
      )}
    </div>
      </div>
  )
}

export default GPTMovieSuggestions
