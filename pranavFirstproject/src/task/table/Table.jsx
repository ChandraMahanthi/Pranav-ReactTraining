import React from 'react'
import './Table.css'

function Table({usersList , setUsersList}) {
function remove(index)
{
  usersList.splice(index,1);
  setUsersList([...usersList])
}
  return (
    <div>
        <table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Password</td>
                    <td>Email</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    usersList.map(function(element,index){
                      return<tr>
                        <td>{element.name}</td>
                        <td>{element.password}</td>
                        <td>{element.email}</td>
                        <td><button onClick={()=>{
                          remove(index)
                        }}>Delete</button></td>
                      </tr>
                    })
                  }
                </tbody>
        </table>
    </div>
  )
}

export default Table