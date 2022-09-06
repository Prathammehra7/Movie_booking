import React from 'react'
import a from '../Videoassets/a.mp4'
import b from '../Videoassets/b.mp4'
import c from '../Videoassets/c.mp4'
import d from '../Videoassets/d.mp4'
import "./Main1.css"

const Main = () => {

  const poster1 ="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/brahmastra-et00063710-1661162101.jpg"
  const poster2  ="https://m.media-amazon.com/images/M/MV5BZWEzNTI5MmEtYmYwMy00MjhkLWFkY2UtNGVkNjIwYzZhNjMwXkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_.jpg"
  const poster3  ="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/goodbye-et00335128-1658737310.jpg"
  const poster4  ="https://m.media-amazon.com/images/M/MV5BZjhjMTA2MGEtNmI4ZS00ZGVkLThiYTMtN2Q1ZWI4YzcyYjM3XkEyXkFqcGdeQXVyMTAwMjgyOTY4._V1_.jpg"
  return (
    <div className='hall'>
      <h1>Upcoming Movies Trailers </h1>
    <div className='Main1'>
      <video
        className='video'
        controls
        poster={poster1}
        loop

        playbackRates={{}}
        src={a} >

        <source src={a} type="video/mp4" />
      </video>
     <video
        className='video'
        controls
        loop
        poster={poster2}
        playbackRates={{}}
        src={b} >

        <source src={b} type="video/mp4" />
      </video>
      </div>
     
    <div className='Main2'>

      <video
        className='video'
        controls
        loop
        poster={poster3}
        playbackRates={{}}
        src={c} >

        <source src={c} type="video/mp4" />
      </video>
      <video
        poster={poster4}
        className='video'
        controls
        loop
        playbackRates={{}}
        src={d} >
        <source src={d} type="video/mp4" />
      </video>

    </div>
    </div>
  )
}

export default Main