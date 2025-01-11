import React from 'react';
import './User.css'

function User({users}) {
  return (
    <div>
      <div className='card'>
        <img src={users.picture.large} alt="" />
        <h2>Name : {users.name.first}</h2>
        <p>Gender : {users.gender}</p>
        <p>Email : {users.email}</p>
        <button>Click me</button>
      </div>
    </div>
  )
}

export default User
// element = {name :"A" , gender : "aa"};

{/* <User users = {element}/> */}

// users = element;


// function User(users) {

//users = {users:{name :"A" , gender : "aa"}};

// console.log(users.users.name)

// ---------------------------------------------------------

// function User({users}) {

//props = {users:{name :"A" , gender : "aa"}};

// let {users} = props;
// users:{name :"A" , gender : "aa"}
// console.log(users.name)
