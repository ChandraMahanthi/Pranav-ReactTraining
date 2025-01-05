import React, { useState } from 'react';
import Table from './table/Table';
import './Task.css'

function Task() {
let [userData , setUserData] = useState({
    name:"",
    password : "",
    email : ""
})

let [usersList , setUsersList] = useState([]);

function getUserName(event)
{
    setUserData({...userData, name : event.target.value})
    // console.log(userData)
}
function getUserPassword(event)
{
    setUserData({...userData, password : event.target.value})
    // console.log(userData)
}
function getUserEmail(event)
{
    setUserData({...userData, email : event.target.value})
    // console.log(userData)
}
function addUser()
{
    setUsersList([...usersList , userData])
}
  return (
    <div className='form'>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" placeholder='Enter your Name' onChange={getUserName} id='name'/>
        <br />
        <label htmlFor="pwd">Password</label>
        <br />
        <input type="password" placeholder='Enter your Password' onChange={getUserPassword} id='pwd'/>
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" placeholder='Enter your Email' onChange={getUserEmail} id='email'/>
        <br />
        <button onClick={addUser}>Submit</button>
        
        <Table usersList={usersList} setUsersList={setUsersList}></Table>
    </div>
  )
}

export default Task

// (event)=>{
//     setinputData({...inputdata , name:event.target.value})
// }

// (event)=>{
//     setinputData({...inputdata , age:event.target.value})
// }

// variable = {name :"" , password:"" , email:""}
// after Setter function => setVariable({name: event.target.value})

// variable = {name :"Pranav" , password:"" , email:""}