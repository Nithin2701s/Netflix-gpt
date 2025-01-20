import React from 'react'
import VideoTitle from './VIdeoTItle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import { TMDB_IMAGE_URL } from '../utils/constants'

const MainContainer = () => {
    const nowPlaying = useSelector(store=>store.movies?.nowPlayingMovies)
    if(!nowPlaying) return
    const movie = nowPlaying[0]
    // console.log(movie)
    const {id,overview,adult} = movie
  return (
    <div className='overflow-x-hidden'>
      <img src={TMDB_IMAGE_URL + movie?.poster_path} alt="" className='z-20 block lg:hidden' />
      <VideoTitle movieId={id} adult={adult} overview={overview}/>
      <VideoBackground movieId={id}/>
       
    </div>
  )
}

export default MainContainer
