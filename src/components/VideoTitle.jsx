import React, { useEffect, useState } from "react";
import { API_OPTIONS, TMDB_IMAGE_URL } from "../utils/constants";
import useLatestMovieLogo from "../hooks/useLatestMovieLogo";

const VideoTitle = ({ movieId, overview, adult}) => {
    const image =  useLatestMovieLogo(movieId)
  return (
    <div className=' text-white flex bg-black  bg-repeat-round bg-opacity-30  pt-[20%] lg:absolute w-full overflow-x-hidden aspect-video'>
      {/* <h1 className='text-5xl font-bold p-5'>
        {title}
      </h1> */}
      <div className="px-2 lg:px-12 w-full">

      <img
        src={TMDB_IMAGE_URL + image?.file_path}
        alt=''
        className="w-3/12 hidden my-5 lg:block"
        />
      <p className='w-1/3 p-2 text-sm hidden lg:block'>{overview}</p>
      <div className='flex justify-center lg:justify-start gap-x-4 lg:gap-x-5'>
        <button className='bg-white text-black hover:bg-opacity-80 lg:text-xl font-semibold p-3 px-8 lg:px-12 rounded-lg items-center flex'>
          <img
            src='https://images.freeimages.com/fic/images/icons/2315/default_icon/256/media_play.png'
            alt=''
            className='h-5 lg:h-7'
          />{" "}
          Play
        </button>
        <button className='bg-gray-600 bg-opacity-50 text-white hover:bg-opacity-30 text-sm lg:text-xl font-semibold  p-3 px-8  lg:px-12 rounded-lg gap-x-2 items-center flex'>
          <img
            src='https://img.icons8.com/ios7/512/FFFFFF/info.png'
            alt=''
            className='h-5 lg:h-6 text-white'
            />
          {"  "}
          More Info
        </button>
      </div>
      </div>
      <div className="hidden lg:block self-center justify-self-end pr-16 pl-2 border-l-4 py-2  bg-gray-500 bg-opacity-50 ">
        <h1>{adult? 'A':'U/A'}</h1>
      </div>
    </div>
  );
};

export default VideoTitle;
