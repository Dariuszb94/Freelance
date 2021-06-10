import React, { useState } from "react";
import { VideoScroll } from "react-video-scroll";
import VideoSrc from "../../assets/video.mp4";
export const Video = () => {
  const onScroll = (props) => {
    console.log(props);
  };
  return (
    <React.Fragment>
      <VideoScroll
        playbackRate={1054}
        style={{ position: "fixed" }}
        onScroll={onScroll}
      >
        <video
          tabIndex="0"
          autobuffer="autobuffer"
          preload="preload"
          style={{ width: "100%", objectFit: "contain" }}
          playsInline
        >
          <source type="video/mp4" src={VideoSrc} />
        </video>
      </VideoScroll>
    </React.Fragment>
  );
};

export default Video;
