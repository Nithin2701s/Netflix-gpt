import MovieCard from "./MovieCard";
const MovieList = ({movieList}) => {
  return (
    <>
      {movieList?.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </>
  );
};

export default MovieList;
