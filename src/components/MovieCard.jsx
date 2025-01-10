import React from 'react'
 import { TMDB_IMAGE_URL } from '../utils/constants' 
import useMovieBackdrop from '../hooks/useMovieBackdrop'
const MovieCard = ({movie}) => {
  const image = useMovieBackdrop(movie.id)
  return (
    <div className='text-white flex self-center overflow-hidden'>
      <div className='w-60 hover:shadow-2xl hover:shadow-black hover:scale-150 ease-in duration-200 '>
        <img src={TMDB_IMAGE_URL +image?.file_path} alt=""
        className=''
         />
      </div>
       </div>
  )
}

export default MovieCard
