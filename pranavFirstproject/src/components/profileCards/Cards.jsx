import React from 'react'
import { useState } from 'react';
import './Cards.css'

function Cards() {
    const [image , setImage] = useState("https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg");

  const [name , setName] = useState("Virat Kohli");

  const [age , setAge] = useState(36);
  let VImage = ()=>
  {
    setAge(36)
    setName("Virat Kohli")
    setImage("https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg")
}
let AImage = ()=>
    {
      setAge(43)
      setName("AB De Villiers")
    setImage("https://miro.medium.com/v2/resize:fit:900/1*mtSNo5MIEX7trMtFVRzbTg.jpeg")
  }
  return (
    <div>
    Profiles
    <div className='ProfileCard'>
      <img src={image} alt="" />
      <div className='cardDetails'>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
      </div>
      <div className='buttons'>
        <button onClick={VImage}>Virat Kohli</button>
        <button onClick={AImage}>AB De Villiers</button>
      </div>
    </div>
    </div>
  )
}

export default Cards