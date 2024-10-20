import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

export const VideoRender = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    {
      video: `video/first-date-question.mp4`,
      title: "Favourite moment with your significant other",
      poster: "covers/first-date-cover.png",
    },
    {
      video: `video/best-meal-ever.mp4`,
      title: "A story from your travels",
      poster: "covers/best-meal-ever-cover.png",
    },
    {
      video: `video/grandfather-wisdom.mp4`,
      title: "A wonderful memory from Childhood ",
      poster: "covers/grandfather-wisdom-cover.png",
    },
  ];

  const handlePlay = (index) => {
    setPlayingVideo(index);
  };

  return (
    <>
      {videos.map((item, index) => (
        <div key={`${index}-${item.title}`} className="video-box">
          <div className="video-title">{item.title}</div>
          <VideoPlayer
            src={item.video}
            isPlaying={playingVideo === index}
            onPlay={() => handlePlay(index)}
            poster={item.poster}
          />
        </div>
      ))}
    </>
  );
};
