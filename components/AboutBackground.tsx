'use client';
import React, { useEffect, useRef, useState } from 'react';
import Mute from '@/public/icons8-mute-100.png';
import Speaker from '@/public/icons8-speaker-100.png';
import Image from 'next/image';
function PartnerBackground() {
  const [mute, setMute] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // @ts-expect-error
      videoRef.current.play();
    }, 1000);
  }, []);

  return (
    <div className='group relative hover:cursor-pointer'>
      <video
        onClick={() => setMute(!mute)}
        ref={videoRef}
        loop
        muted={mute}
        src='video11.mp4'
      ></video>
      {mute && (
        <div
          onClick={() => setMute(!mute)}
          className='absolute bottom-4 right-3 hidden opacity-50 group-hover:block'
        >
          <Image width={30} height={30} src={Mute} alt='mute' />
        </div>
      )}
      {!mute && (
        <div
          onClick={() => setMute(!mute)}
          className='absolute bottom-4 right-3 hidden opacity-50 group-hover:block'
        >
          <Image width={30} height={30} src={Speaker} alt='mute' />
        </div>
      )}
    </div>
  );
}

export default PartnerBackground;
