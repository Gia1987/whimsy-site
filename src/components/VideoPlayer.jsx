import { useRef, useEffect } from "react";

export const VideoPlayer = ({ src, poster, onPlay, isPlaying }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      className="video"
      onPlay={onPlay}
      controls
      preload="none"
      width="100%"
      poster={poster}
      src={src}
    />
  );
};

export default VideoPlayer;
