import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addHorrorMovies } from "../store/MoviesSlice"
import { API_OPTIONS, TMDB_MOVIE_LIST_URL } from "../utils/constants"


const useHorrorMovies = ()=>{
    const dispatch = useDispatch()
  useEffect(()=>{
    getHorrorMovies()
  },[])
  
  const getHorrorMovies = async()=>{
     const response  = await fetch(`${TMDB_MOVIE_LIST_URL}discover/movie?with_genres=27&language=en-US&page=1&include_adult=false&sort_by=popularity.desc`,API_OPTIONS
     )
     const json = await response.json()
    //  console.log(json.results)
     dispatch(addHorrorMovies(json?.results))
  }
}

export default useHorrorMovies