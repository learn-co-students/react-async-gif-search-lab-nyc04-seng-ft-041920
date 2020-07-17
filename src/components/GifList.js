import React from 'react'


const GifList = props => {
  
  return(
    <div>
      {props.gifs.map(gif =>{
        return <img src={gif} key={gif} alt="gif" />
      })
      }
    </div>
  )
}


export default GifList