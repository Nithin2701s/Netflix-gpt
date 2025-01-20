import { useSelector } from "react-redux";
import useLatestVideoTrailer from "../hooks/useLatestVideoTrailer";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const latestVideoTrailer = useSelector((store) => store.movies?.latestVideoTrailer);
  useLatestVideoTrailer(movieId);
  const playerRef = useRef(null);

  const config = {
    youtube: {
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        fs: 1,
        loop: 1,
        playlist: latestVideoTrailer?.key,
      },
    },
  };

  const handleProgress = (state) => {
    if ((state.playedSeconds >= 20 || state.playedSeconds == playerRef.current.getDuration()) && playerRef.current) {
      playerRef.current.seekTo(0);
    }
  };

  return (
    <div className="w-full aspect-video hidden lg:block">
      <ReactPlayer
        ref={playerRef}
        className="w-full h-full"
        url={YOUTUBE_VIDEO_URL + latestVideoTrailer?.key}
        playing={true}
        muted={true}
        width="100%"
        height="100%"
        config={config}
        onProgress={handleProgress}
      />
    </div>
  );
};

export default VideoBackground;
