import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieBackdrop = (movieId) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!movieId) return;


    const getImage = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/images?include_image_language=en`,
          { ...API_OPTIONS }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
         setImage(json?.backdrops?.[0] || json?.logos?.[0] || null);
      } catch (error) {
        if (error.name !== "AbortError") {
          // console.error("Failed to fetch movie backdrop:", error);
        }
      }
    };

    getImage();

    return () => {
    };
  }, [movieId, API_OPTIONS]);

  return image;
};

export default useMovieBackdrop;
