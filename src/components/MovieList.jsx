import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movieList }) => {
  return (
    <div className="my-20">
      <h1 className="text-white font-semibold text-2xl">{title}</h1>
      <div className="flex space-x-5 overflow-x-scroll overflow-y-hidden scrollbar-none">
        {movieList?.map((movie) => (
          <div
            key={movie.id}
            className="flex justify-center"
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
