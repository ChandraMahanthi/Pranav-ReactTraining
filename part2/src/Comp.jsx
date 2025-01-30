import React, { useState } from 'react';
import Paragraph from './Paragraph'
import Heading from './Heading'

function Comp({props}) {
    const [show,setShow] = useState(true);
   
    const heading= ()=>{
        setShow(false)
    }
    const paragraph= ()=>{
        setShow(true)
    }

  return (
    <div>
       <h1>{props}</h1>
       {
        show ? <Paragraph/>:<Heading/> 
       }

       <button onClick={heading}>Show heading</button>
       <button onClick={paragraph}>Show Paragraph</button>
       
    </div>
  )
}

export default Comp