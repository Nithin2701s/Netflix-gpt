import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addRomanticMovies } from "../store/MoviesSlice"
import { API_OPTIONS, TMDB_MOVIE_LIST_URL } from "../utils/constants"


const useRomanticMovies = ()=>{
    const dispatch = useDispatch()
    const romanticMovies = useSelector(state => state.movies?.romanticMovies);
  useEffect(()=>{
   !romanticMovies && getRomanticMovies()
  },[])
  
  const getRomanticMovies = async()=>{
     const response  = await fetch(`${TMDB_MOVIE_LIST_URL}discover/movie?with_genres=10749&language=en-US&page=1&include_adult=false&sort_by=popularity.desc`,API_OPTIONS
     )
     const json = await response.json()
    //  console.log(json.results)
     dispatch(addRomanticMovies(json?.results))
  }
}

export default useRomanticMovies