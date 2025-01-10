import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieBackdrop = (movieId)=>{
    const [image, setImage] = useState();
          useEffect(() => {
            getImage();
          }, []);
          const getImage = async () => {
            const response = await fetch(
              "https://api.themoviedb.org/3/movie/"+movieId+"/images?include_image_language=en",
              API_OPTIONS
            );
            const json = await response.json();
            // console.log(json);
            setImage(json?.backdrops?.[0]);
          };
          return image
}

export default useMovieBackdrop;