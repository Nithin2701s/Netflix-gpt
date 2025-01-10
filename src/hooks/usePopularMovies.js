import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../store/MoviesSlice"
import { API_OPTIONS } from "../utils/constants"


const usePopularMovies = ()=>{
    const dispatch = useDispatch()
  useEffect(()=>{
    getPopularMovies()
  },[])
  
  const getPopularMovies = async()=>{
     const response  = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&include_adult=true',API_OPTIONS
     )
     const json = await response.json()
    //  console.log(json.results)
     dispatch(addPopularMovies(json?.results))
  }
}

export default usePopularMovies