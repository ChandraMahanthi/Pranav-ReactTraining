import React from 'react';
import axios from 'axios';

export function getUsers() {
    var promiseObject = axios.get("https://randomuser.me/api/?results=10");

    return promiseObject;

       
  return (
    <div>

    </div>
  )
}


// promiseObject.then(
//     (users)=>{
//             console.log(users.data.results)
//             // console.log("Then block executed==> SUCCESS DATA");
//         })
//         .catch(
//             (error)=>{
//                 console.log(error)
//             // console.log("Catch block executed==> FAILURE DATA");

//         });