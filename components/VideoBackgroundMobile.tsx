"use client";
import React, { useEffect, useRef } from "react";
function VideoBackgroundMobile() {
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
        // @ts-expect-error
      videoRef.current.play();
    }, 5000);
  }, []);

  return (
    <div className="">
      <video
        ref={videoRef}
        loop
        muted
        src="videoBgMob.mp4"
        className="aspect-video"
      ></video>
    </div>
  );
}

export default VideoBackgroundMobile;
