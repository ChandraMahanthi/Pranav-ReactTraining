import React from 'react'
import './Table.css'

function Table({usersList}) {
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
                        <td><button>Delete</button></td>
                      </tr>
                    })
                  }
                </tbody>
        </table>
    </div>
  )
}

export default Table