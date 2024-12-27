import React from 'react'
import './ImageSlider.css'

function ImageSlider({ImageS , names}) {
  return (
    <div className='imageslider'>
            <img src={ImageS} alt="Error" width={100} height={100}/>
            <p>{names}</p>
    </div>
  )
}

export default ImageSlider