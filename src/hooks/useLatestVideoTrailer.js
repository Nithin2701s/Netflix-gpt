import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addLatestVideoTrailer } from "../store/MoviesSlice";

const useLatestVideoTrailer = (movieId)=>{
    const dispatch = useDispatch()
    const videoTrailer = useSelector(state => state.movies.latestVideoTrailer)
    useEffect(() => {
       !videoTrailer && getVideo();
      }, []);
      const getVideo = async () => {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",API_OPTIONS
        );
        const json = await response.json();
        // console.log(json.results)
        const filterVideos = json.results.filter(
          (video) => video.type === "Teaser"
        );
        // console.log(filterVideos[0]);
        const videoTrailer = filterVideos.length > 0? filterVideos[0]:json.results[0]
        dispatch(addLatestVideoTrailer(videoTrailer))
      };
}

export default useLatestVideoTrailer;
