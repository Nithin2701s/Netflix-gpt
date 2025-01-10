import { useSelector } from "react-redux";
import useLatestVideoTrailer from "../hooks/useLatestVideoTrailer";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const latestVideoTrailer = useSelector(store => store.movies?.latestVideoTrailer);
  useLatestVideoTrailer(movieId);
  const playerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        if (currentTime >= 20) {
          playerRef.current.seekTo(0);
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const onReady = (e) => {
    playerRef.current = e.target;
    e.target?.play();
  };
  const config = {
    youtube: {
      playerVars: {
        autoplay: 1, // Autoplay enabled
        modestbranding: 1,
        controls: 0, // Hide controls
        rel: 0, // Disable related videos
        showinfo: 0,
        fs: 1, // Enable fullscreen button
        mute: 1, // Mute the video
      },
    },
  }
  return (
    <div className="w-full aspect-video">
      <ReactPlayer
        ref={playerRef}
        className="w-full h-full"
        url={YOUTUBE_VIDEO_URL + latestVideoTrailer?.key}
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        config={config}
        onReady={onReady}
      />
    </div>
  );
};

export default VideoBackground;
