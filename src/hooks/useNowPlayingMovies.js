import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../store/MoviesSlice"
import { API_OPTIONS, TMDB_MOVIE_LIST_URL } from "../utils/constants"

const useNowPlayingMovies = ()=>{
  const dispatch = useDispatch()
  const nowPlaying = useSelector(state=> state.movies?.nowPlayingMovies);
  useEffect(()=>{
    !nowPlaying && getNowPlayingMovies()
  },[])
  
  const getNowPlayingMovies = async()=>{
     const response  = await fetch(TMDB_MOVIE_LIST_URL + 'movie/now_playing?page=1&include_adult=true',API_OPTIONS
     )
     const json = await response.json()
    //  console.log(json.results)
     dispatch(addNowPlayingMovies(json?.results))
  }
}

export default useNowPlayingMovies