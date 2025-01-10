import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movieList }) => {
  return (
    <div className="pl-6 mt-10 h-40">
      <h1 className="text-white font-semibold text-2xl my-5">{title}</h1>
      <div className="flex space-x-2 overflow-x-scroll scrollbar-none">
        {movieList?.map((movie) => (
          <div
            key={movie.id}
            className="relative flex justify-center h-auto"
          >
            <div className="">
              <MovieCard movie={movie} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
