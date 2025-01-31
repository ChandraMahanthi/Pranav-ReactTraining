import React, { useEffect, useState } from 'react'

function Paragraph() {
  const [text,setText] = useState()

  useEffect(()=>{
    console.log(`useEffect has been called`)
    return ()=>{
      alert("Paragraph Component is being unmounted");
      console.log(`Return function has been called`)}
  },[])

  // Callback function ==> Setup function
  // Array ==> dependency

  const update = ()=>{
    setText("and updated")
  }
  return (
    <div> Paragraph Component has been Mounted {text}<br />
      <button onClick={update}>update Paragraph</button>
    </div>
  )
}

export default Paragraph