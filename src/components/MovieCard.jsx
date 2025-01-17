import React, { useState } from 'react'
 import { TMDB_IMAGE_URL } from '../utils/constants' 
import useMovieBackdrop from '../hooks/useMovieBackdrop'
const MovieCard = ({movie}) => {
  const [scale,setScale] = useState(false)
  const image = useMovieBackdrop(movie.id)
  const handleMouseOver = ()=>{
    setScale(true)
  }
  const handleMouseLeave = ()=>{
    setScale(false)
  }
  return (
    <div className={` p-1 py-4 h-[15rem] text-white self-center ${scale ? 'overflow-visible  shadow-black shadow-2xl scale-125 ease-in duration-200' : ''}`} onMouseLeave={handleMouseLeave}>
      <div className={`w-60 h-[8rem] overflow-y-hidden`} onMouseOver={handleMouseOver}>
        <img src={TMDB_IMAGE_URL + (image? image.file_path :movie?.poster_path)} alt=""
        className='object-cover'
         />
      </div>
      {scale && (<div className='text-white flex gap-x-2 w-full h-[5rem] items-center z-40 p-5 bg-gray-800'>
        <div>
         <h1 className='text-sm'>  {movie?.title}</h1>
        </div>
        <div>
         <h1 className='text-sm border-red-500 border px-3'>{movie?.adult? 'A':'U/A'}</h1>
        </div>
      </div>)}
       </div>
  )
}

export default MovieCard
