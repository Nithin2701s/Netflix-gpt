import { useEffect, useCallback } from "react";

const useListScroll = (movieRef) => {
  const handleScroll = useCallback(() => {
    const container = movieRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth / 2;

    if (scrollLeft >= scrollWidth) {
      container.scrollLeft = scrollLeft - scrollWidth;
    }
    if (scrollLeft <= 1) {
      container.scrollLeft = scrollLeft + scrollWidth;
    }
  }, [movieRef]);

  useEffect(() => {
    if (!movieRef.current) return;

    const scrollContainer = movieRef.current;
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2 +2;

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [movieRef, handleScroll]);
};

export default useListScroll;
