import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useHorrorMovies from '../hooks/useHorrorMovies'
import useRomanticMovies from '../hooks/useRomanticMovies'
import MovieListContainer from './MovieListContainer'

const SecondaryContainer = () => {
  const movieList = useSelector(state=>state.movies)
  useNowPlayingMovies()
  usePopularMovies()
  useHorrorMovies()
  useRomanticMovies()
  return (
     <div className='bg-black p-5 pb-16' >
    {movieList && (<div className=''>
     <MovieListContainer title={'Now Playing'} movieList = {movieList.nowPlayingMovies}/>
     <MovieListContainer title={'Popular'} movieList = {movieList.popularMovies}/>
     <MovieListContainer title={'Horror'} movieList = {movieList.horrorMovies}/>
     <MovieListContainer title={'Romantic'} movieList = {movieList.romanticMovies}/>
     </div>
     )}
     </div>
  )
}

export default SecondaryContainer
