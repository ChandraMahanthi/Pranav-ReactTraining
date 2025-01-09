import React from 'react';
import {getUsers} from '../service/UserService';


function Users() {
    const sendRequest = ()=>
    {
        getUsers();
    }
  return (
    <div>
        <button onClick={sendRequest}>CLICK ME</button>
    </div>
  )
}

export default Users