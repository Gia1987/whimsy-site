import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

export const VideoRender = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    { video: "first-date-question.mp4", title: "First Date Question" },
    { video: "best-meal-ever.mp4", title: "Best Meal Ever" },
    { video: "grandfather-wisdom.mp4", title: "Grandfather's Advice" },
  ];

  const handlePlay = (index) => {
    setPlayingVideo(index);
  };

  return (
    <>
      {videos.map((item, index) => (
        <div className="video-box">
          <>{item.title}</>
          <VideoPlayer
            key={index}
            src={item.video}
            isPlaying={playingVideo === index}
            onPlay={() => handlePlay(index)}
            poster="logo/whimsy-logo.svg"
          />
        </div>
      ))}
    </>
  );
};
