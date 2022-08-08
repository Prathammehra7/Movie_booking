import React from 'react'
import videoBg from '../Videoassets/videoBg.mp4'
import "./Main.css"

const Main = () => {
  return (
    <div className='main'>
      <h1>Brahmāstra: motion Poster </h1>
      <video 
      controls
      autoPlay
        loop
        style={{
          display: "flex",
          justifycontent: "center",
          width:"100%",
          height:"600px",
          backgroundimage:"linear-gradient(180deg, white , red)"
        }}
        playbackRates={{}}
     src={videoBg} >
        <source src={videoBg} type="video/mp4" />
      </video>


    </div>
  )
}

export default Main