import React, { useState } from 'react';
import { electronicService } from '../services/electronics/electronicService';
import './Electronics.css'

function Electronics() {
    let [electronicProducts , setElectronicProducts] = useState([]);


    const getElectronics = ()=>{
        electronicService().then(
            (response)=>{
                console.log(response.data);
                setElectronicProducts(response.data);
            })
            .catch(
                (error)=>{
                    console.log(error)
                })
    }
  return (
    <div>
        <h1>Electronics</h1>
        <button onClick={getElectronics}>Click me to see electronic products</button>
        {
            electronicProducts.length > 0 ?<div>{electronicProducts.map((element ,index)=>{
                return  <div className='electronics_card'>
                <img src={element.image} alt="" />
                <h2>{element.title}</h2>
                <h2>$ {element.price}</h2>
            </div>
            })}</div> :  <div>Nothing to show</div>
        }
       
    </div>
  )
}

export default Electronics
