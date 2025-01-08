import React from 'react'

function Map() {

// let data = [1,2,3,4,5,6,7,8,9,10];

let data = [
    {
        name : "Chandrahas",
        age : 25,
        id: 101
    },
    {
        name : "Pranav",
        age : 26,
        id : 102
    },
    {
        name : "Virat Kohli",
        age : 38,
        id : 103
    },
    {
        name : "MS Dhoni",
        age : 44,
        id : 104
    }
]
  return (
    <div>
        {/* <ul>
            {
                data.map((element , index)=>{
                    return <li>{element}</li>
                })
            }
        </ul> */}
    <table>
        <thead>
            <th>NAME</th>
            <th>AGE</th>
            <th>ID</th>
        </thead>
        <tbody>
        {
            data.map((userData)=>{
                return <tr>
                    <td>{userData.name}</td>
                    <td>{userData.age}</td>
                    <td>{userData.id}</td>
                </tr>
            })
        }
        </tbody>
    </table>
    </div>
  )
}

export default Map