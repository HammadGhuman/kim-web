"use client";
import React, { useEffect, useRef } from "react";

function AboutBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // @ts-expect-error
      videoRef.current.play();
    }, 5000);
  }, []);
  return (
    <div>
      <video ref={videoRef} loop muted src="video11.mp4"></video>
    </div>
  );
}

export default AboutBackground;
