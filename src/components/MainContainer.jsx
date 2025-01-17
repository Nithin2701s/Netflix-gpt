import React, { useEffect } from 'react'
import VideoTitle from './VIdeoTItle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const nowPlaying = useSelector(store=>store.movies?.nowPlayingMovies)
    if(!nowPlaying) return
    const movie = nowPlaying[0]
    // console.log(movie)
    const {id,overview,adult} = movie
  return (
    <div className='overflow-x-hidden'>
      <VideoTitle movieId={id} adult={adult} overview={overview}/>
      <VideoBackground movieId={id}/>
       
    </div>
  )
}

export default MainContainer
