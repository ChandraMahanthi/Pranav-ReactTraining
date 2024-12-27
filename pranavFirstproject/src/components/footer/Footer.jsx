import React from 'react'
import './Footer.css'
import { useState } from 'react';

function Footer() {

  let result = document.getElementById("result");

  let [Statevariable , setStateVaraiable] = useState(0);

  var addState = () =>
    {
      setStateVaraiable(Statevariable+1)
    }
  var subState = () =>
    {
      setStateVaraiable(Statevariable-1)
    }


  // var variable = 0;

  // var add = () =>
  // {
  //   variable = variable+1;
  //   result.innerText = `${variable}`;
  // }
  // var sub = () =>
  // {
  //   variable = variable-1;
  //   result.innerText = `${variable}`;
  // }

  return (
    <div className='footer'>
      {/* <button onClick={add}>Add</button>
      <button onClick={sub}>remove</button>
      <p id="result"></p> */}
      <button onClick={addState}>Add</button>
      <button onClick={subState}>remove</button>
      <p id="result">{Statevariable}</p>
    </div>
  )
}

export default Footer