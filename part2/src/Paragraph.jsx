import React, { useEffect, useState } from 'react'

function Paragraph() {
  const [text,setText] = useState()
  useEffect(()=>{
    return ()=>{}
  },[])

  // Callback function ==> Setup function
  // Array ==> dependency
  const update = ()=>{
    setText("updated")
  }
  return (
    <div>{text}Paragraph <br />
      <button onClick={update}>update Paragraph</button>
    </div>
  )
}

export default Paragraph