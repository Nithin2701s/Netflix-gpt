import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";


const useLatestMovieLogo = (movieId)=>{
    const [image, setImage] = useState();
      useEffect(() => {
        getImage();
      }, []);
      const getImage = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/images?include_image_language=en`,
          API_OPTIONS
        );
        const json = await response.json();
        // console.log(json.logs);
        setImage(json?.logos?.[0]);
      };
      return image
}

export default useLatestMovieLogo