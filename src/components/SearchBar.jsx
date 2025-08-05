import React, { useEffect, useState } from "react";
import {
  API_OPTIONS,
  TMDB_IMAGE_URL,
  TMDB_MOVIE_LIST_URL,
} from "../utils/constants";
import img from "../assets/search.png";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    if (!searchText) {
      setResults([]);
      setHasMore(false);
      return;
    }

    try {
      const response = await fetch(
        `${TMDB_MOVIE_LIST_URL}search/movie?query=${searchText}&include_adult=false&language=en-US&page=${page}`,
        API_OPTIONS
      );

      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const json = await response.json();
      console.log(json)
      if (page === 1) {
        setResults(json.results || []);
      } else {
        setResults((prev) => [...prev, ...(json.results || [])]);
      }

      if (page >= json.total_pages || !json.results?.length) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults([]);
      setHasMore(false);
    }
  };

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1); // reset page when search text changes
      fetchData();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  // Load more pages when page increases
  useEffect(() => {
    if (page !== 1) fetchData();
  }, [page]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <div className='text-white flex justify-between items-center bg-gray-800 p-0 px-0 rounded-full overflow-hidden'>
        <input
          type='text'
          id='Search'
          className='text-gray-200 bg-inherit w-10/12 outline-none px-5'
          value={searchText}
          placeholder='Search for a movie'
          onChange={handleChange}
        />
        <button htmlFor='Search' className='text-lg px-4 w-2/12'>
          <img src={img} alt='search-icon' className='p-3' />
        </button>
      </div>

      {searchText && results.length > 0 && (
        <div className='text-white bg-black p-3 ml-20 mb-40 absolute bg-opacity-95 w-[90%] h-screen left-0 overflow-y-scroll scrollbar-none' id='scrollableDiv'>
          <InfiniteScroll
            dataLength={results.length}
            next={() => setPage((prev) => prev + 1)}
            hasMore={hasMore}
            loader={<p className='text-center'>Loading more movies...</p>}
            scrollableTarget='scrollableDiv'
          >
            {results.map((movie) => {
              if (movie.backdrop_path || movie.poster_path)
                return (
                  <div
                    key={movie.id}
                    className='flex p-4 justify-center w-[100%]'
                  >
                    <div className='w-1/3 m-2 p-2'>
                      <img
                        src={
                          TMDB_IMAGE_URL +
                          (movie.backdrop_path || movie.poster_path)
                        }
                        alt=''
                        className='h-52'
                        loading='lazy'
                      />
                    </div>
                    <div className='w-2/3 m-2 p-2'>
                      <span className='title text-2xl font-semibold'>
                        {movie.title || movie.name}
                      </span>
                      <span className='block text-sm'>{movie.overview}</span>
                      <span className='block text-gray-300 text-xs'>
                        {movie.original_language}
                      </span>
                      <span className="text-sm">
                        {new Date(movie?.release_date).getFullYear() || ''}
                      </span>
                    </div>
                  </div>
                );
              return null;
            })}
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
