import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'

const SecondaryContainer = () => {
  const movieList = useSelector(state=>state.movies)
  useNowPlayingMovies()
  usePopularMovies()
  
  return (
     <>
    {movieList && (<div className=''>
     <MovieList title={'Now Playing'} movieList = {movieList.nowPlayingMovies}/>
     <MovieList title={'Popular'} movieList = {movieList.popularMovies}/>
     <MovieList title={'Horror'} movieList = {movieList.nowPlayingMovies}/>
     <MovieList title={'Romantic'} movieList = {movieList.nowPlayingMovies}/>
     </div>
     )}
     </>
  )
}

export default SecondaryContainer
