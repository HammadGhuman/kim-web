'use client';
import React, { useEffect, useRef } from 'react';
function AboutKim2() {
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // @ts-expect-error
      videoRef.current.play();
    }, 100);
  }, []);

  return (
    <div className=''>
      <video
        ref={videoRef}
        loop
        muted
        src='about-kim-3.mp4'
        className='w-full'
      ></video>
    </div>
  );
}

export default AboutKim2;
