import { useRef } from "react";
import MovieList from "./MovieList";
import useListScroll from "../hooks/useListScroll";

const MovieListContainer = ({ title, movieList }) => {
  // Duplicate the movie list for seamless scrolling
  const infiniteMovies = movieList && [...movieList, ...movieList];
  const movieRef = useRef(null);
  useListScroll(movieRef)
  return (
    <div className='my-10'>
      {/* Title */}
      <h1 className='mx-5 my-5 text-white text-2xl font-semibold'>{title}</h1>

      {/* Marquee Container */}
      <div ref={movieRef} className=' ml-5 overflow-x-scroll overflow-y-hidden perspective-distant scrollbar-none'>
      <div className='flex space-x-5 animate-marquee'>
        <MovieList movieList={infiniteMovies} />
      </div>
      </div>
    </div>
  );
};

export default MovieListContainer;
