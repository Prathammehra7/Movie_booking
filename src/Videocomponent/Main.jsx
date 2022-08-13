import React from 'react'
import videoBg from '../Videoassets/videoBg.mp4'
import "./Main.css"

const Main = () => {
  return (
    <div className='main'>
      <h1>Brahmāstra: motion Poster </h1>
      <video 
      className='video'
      controls
      autoPlay
        loop
       
        playbackRates={{}}
     src={videoBg} >
        <source src={videoBg} type="video/mp4" />
      </video>


    </div>
  )
}

export default Main