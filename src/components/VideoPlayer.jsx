import { useRef, useEffect } from "react";

export const VideoPlayer = ({ src, poster, onPlay, isPlaying }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <video
      key={src}
      ref={videoRef}
      className="video"
      onPlay={onPlay}
      controls
      preload="none"
      width="100%"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
