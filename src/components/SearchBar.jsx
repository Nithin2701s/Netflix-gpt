import React, { useEffect, useState } from "react";
import {
  API_OPTIONS,
  TMDB_IMAGE_URL,
  TMDB_MOVIE_LIST_URL,
} from "../utils/constants";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const fetchData = async () => {
    if (!searchText) {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(
        `${TMDB_MOVIE_LIST_URL}search/collection?query=${searchText}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const json = await response.json();
      console.log(json.results);
      setResults(json.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults([]); // optionally reset or show error
    }
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);

    return () => clearTimeout(timer);
  }, [searchText]);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <div className='text-white flex justify-between items-center bg-gray-800 p-0 px-0 rounded-full overflow-hidden'>
        <input
          type='text'
          id='Search'
          className='text-gray-200  bg-inherit w-10/12 outline-none px-5'
          value={searchText}
          placeholder='Search for a movie'
          onChange={handleChange}
        />
        <button htmlFor='Search' className='text-lg px-4 w-2/12'>
          <img
            src='src\assets\image.png'
            alt='search-icon'
            className='p-3'
          />
        </button>
      </div>
      {results?.length > 0 && (
        <div className='text-white bg-black p-3 ml-5 absolute bg-opacity-95 w-screen h-screen left-0 overflow-y-scroll'>
          {results.map((movie) => {
            if (movie.backdrop_path)
              return (
                <div key={movie.id} className='flex p-4 gap-4'>
                  <img
                    src={TMDB_IMAGE_URL + movie.backdrop_path}
                    alt=''
                    className='w-80'
                  />
                  <div>
                    <span className='title text-xl font-semibold'>
                      {movie.title || movie.name}
                    </span>
                    <span className='block text-gray-300 text-xs'>
                      {movie.release_date?.slice(0, 4)}
                    </span>
                  </div>
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
