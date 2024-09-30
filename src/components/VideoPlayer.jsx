export const VideoPlayer = ({src, poster}) => {
<script>
  console.log("Hi! I’m the client. This is logged in browser dev console.");
</script>
  return (
    <div data-vjs-player>
      <video controls preload="none" width="100%" poster={`${poster}`}>
        <source src={`${src}`} type="video/mp4"/>
      </video>
    </div>
  );
};
export default VideoPlayer;
