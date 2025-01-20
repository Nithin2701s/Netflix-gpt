import React, { useState } from 'react'
 import { TMDB_IMAGE_URL } from '../utils/constants' 
import useMovieBackdrop from '../hooks/useMovieBackdrop'
const MovieCard = ({movie}) => {
  const image = useMovieBackdrop(movie.id)
  const [scale,setScale] = useState(false)
  const handleMouseOver = ()=>{
    setScale(true)
  }
  const handleMouseLeave = ()=>{
    setScale(false)
  }
  return (
   image && (<div className='mx-5 transform transition-transform duration-300 hover:scale-115 text-white h-52' onMouseLeave={handleMouseLeave}>
          <div className={` w-64`} onMouseOver={handleMouseOver}>
          <img src={TMDB_IMAGE_URL + image?.file_path} alt="" className='w-96'  /> 
          {scale && <div className={`p-2  w-64 justify-between bg-gray-800 ${scale? 'flex':'hidden' }`}>
           <div className='text-sm w-3/4 text-wrap'>{movie?.title}</div> 
            <div className='border border-red-800 px-2 ml-2 h-1/2 w-1/4 text-sm self-center'>
               {movie?.adult? 'A':'U/A'}
            </div>
          </div>}
          </div>
       </div>)
  )
}

export default MovieCard
