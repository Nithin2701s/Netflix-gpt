import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../store/MoviesSlice"
import { API_OPTIONS, TMDB_MOVIE_LIST_URL } from "../utils/constants"


const usePopularMovies = ()=>{
    const dispatch = useDispatch()
  useEffect(()=>{
    getPopularMovies()
  },[])
  
  const getPopularMovies = async()=>{
     const response  = await fetch(`${TMDB_MOVIE_LIST_URL}movie/popular?language=en-US&page=1&include_adult=true`,API_OPTIONS
     )
     const json = await response.json()
    //  console.log(json.results)
     dispatch(addPopularMovies(json?.results))
  }
}

export default usePopularMovies