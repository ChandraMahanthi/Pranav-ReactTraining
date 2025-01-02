import React, { useState } from 'react'

function Normal() {

    let [state, setState] = useState(0)

    function change(param)
    {
        console.log(param)
        //Updater function
        setState(function callback(currentState){

            return currentState+1

        });
        
        setState((currentState)=>{

            return currentState+1;
        });


        function normal(first)
        {
            console.log(first)
        }

        normal(1)
    }
  return (
    <div>
        <h3>{state}</h3>
        <button onClick={()=>{change(23)}}>ADD</button>
    </div>
  )
}

export default Normal