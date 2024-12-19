import React from 'react'
import './ImageSlider.css'

function ImageSlider() {
  return (
    <div className='imageslider'>
        <div>
            <img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg" alt="" width={100} height={100}/>
            <p>Virat Kohli</p>
        </div>
        <div>
            <img src="https://miro.medium.com/v2/resize:fit:900/1*mtSNo5MIEX7trMtFVRzbTg.jpeg" alt="" width={100} height={100}/>
            <p>AB De Villiers</p>
        </div>
        <div>
            <img src="https://rukminim2.flixcart.com/image/850/1000/l0e6kcw0/poster/2/3/a/medium-yuvraj-singh-poster-2-on-fine-art-paper-hd-quality-original-imagc6xw6f2msvyf.jpeg?q=20&crop=false" alt="" width={100} height={100}/>
            <p>Yuvaraj Singh</p>
        </div>
    </div>
  )
}

export default ImageSlider