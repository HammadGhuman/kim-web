import React from 'react'
function Hero() {

  const videoSource = "https://www.youtube.com/watch?v=HodJLhRV7gY";
  return (
    <div className='bg-red-400'>
        <video autoPlay loop muted>
          <source src={videoSource} />
        </video>
    </div>
  )
}

export default Hero