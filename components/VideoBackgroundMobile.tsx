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
    <div>
      <video
        ref={videoRef}
        loop
        muted
        src="videoBgMob.mp4"
      ></video>
    </div>
  );
}

export default VideoBackgroundMobile;
