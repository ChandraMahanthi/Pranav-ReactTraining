import React from 'react';
import './Toggle.css'
import { useState } from 'react';

function Toggle() {

    let [style , setStyle] = useState({TextColor : "black" , BackgroundColor : "white"});
    let [styleName , setStyleName] = useState("Dark");

    let [number , setNumber] = useState(0)
function add()
{
    // setNumber(number +1);
    // setNumber(number +3);

    setNumber((number)=>{number+1});
    console.log(number)
    // setNumber((number)=>{number+1});

}



    function toggleMode(event)
    {
        if(event.target.checked)
        {
            setStyle({TextColor : "white" , BackgroundColor : "black"})
            setStyleName("Light");
        }
        else
        {
            setStyle({TextColor : "black" , BackgroundColor : "white"})
            setStyleName("Dark");
        }
    }
    // function dark()
    // {

    // }
    // function light()
    // {
    // }
  return (
    <div style={{backgroundColor:style.BackgroundColor , color:style.TextColor }}>
        Toggle <br />
        {/* <button onClick={dark}>Change to dark mode</button>
        <button onClick={light}>Change to light mode</button> */}
        <input type="checkbox" onChange={toggleMode} id='Toggle'/>
        <label htmlFor="Toggle">Switch to {styleName} mode</label>
        <br />
        <button onClick={add}>Add</button>
        <p>{number}</p>
    </div>
  )
}

export default Toggle

// Event ---> Any Action --> Change
// Event Listener ---> It waits for an event to take place ---> onChange
// Event handler ---> It decides what should happen when the event occurs ---> toggleMode() ---> event.target --> The DOM element where our event handler is present