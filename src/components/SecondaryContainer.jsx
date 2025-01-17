import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useHorrorMovies from '../hooks/useHorrorMovies'
import useRomanticMovies from '../hooks/useRomanticMovies'

const SecondaryContainer = () => {
  const movieList = useSelector(state=>state.movies)
  useNowPlayingMovies()
  usePopularMovies()
  useHorrorMovies()
  useRomanticMovies()
  return (
     <div className='bg-black' >
    {movieList && (<div className='py-10 px-10'>
     <MovieList title={'Now Playing'} movieList = {movieList.nowPlayingMovies}/>
     <MovieList title={'Popular'} movieList = {movieList.popularMovies}/>
     <MovieList title={'Horror'} movieList = {movieList.horrorMovies}/>
     <MovieList title={'Romantic'} movieList = {movieList.romanticMovies}/>
     </div>
     )}
     </div>
  )
}

export default SecondaryContainer
