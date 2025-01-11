import React, { useState } from 'react';
import {getUsers} from '../service/UserService';
import User from '../user/User';


function Users() {
  let [users , setUsers] = useState([]);

  // users = [];
  // users = [{},{},{},{},{},{},{},{},{},{}];

    const sendRequest = ()=>
    {
      var usersPromiseObject = getUsers();
      usersPromiseObject.then(
      (users)=>{
            console.log(users.data.results);
            setUsers(users.data.results);
            // console.log("Then block executed==> SUCCESS DATA");
          })
          .catch(
            (error)=>{
              console.log(error)
              // console.log("Catch block executed==> FAILURE DATA");
              
            });
            console.log(users);

    }
  return (
    <div>
        <button onClick={sendRequest}>CLICK ME</button>
        {
          users.map((element , index)=>{
            return <User users = {element}/>
          })
        }
    </div>
  )
}

export default Users