import { useEffect, useCallback } from "react";

const useListScroll = (movieRef) => {
  const handleScroll = useCallback(() => {
    const container = movieRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const containerWidth = container.clientWidth;
  
    const maxScrollLeft = scrollWidth - containerWidth;
    const midpoint = maxScrollLeft / 2;
  
    // When the user scrolls past the duplicated list, jump back to the middle
    if (scrollLeft >= maxScrollLeft - 1) {
      container.scrollLeft = midpoint - containerWidth;
    } else if (scrollLeft <= 1) {
      container.scrollLeft = midpoint + 1;
    }
  }, [movieRef]);

  useEffect(() => {
    if (!movieRef.current) return;

    const scrollContainer = movieRef.current;
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [movieRef, handleScroll]);
};

export default useListScroll;
