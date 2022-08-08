import React, {useState} from 'react'
import {Todo} from './Homepage'
import {Link} from 'react-router-dom'
import {FaSortDown} from 'react-icons/fa'
import './App.css'
interface Props {
    list:Todo[]
}
const Group= (props:Props)=> {
    const [data, setData]= useState<Todo[]>(props.list)
    const sort= (field: "title"| "id")=> {
        let arr= [...data];
        arr.sort((a,b)=> {
            if (a[field]< b[field]) return -1;
            return 1;
        })
       setData(arr);
       }
    return (
        <table>
        <thead>
            <tr>
                <th>Id<button style={{marginLeft:'5px'}} onClick={()=> sort('id')}><FaSortDown/></button></th>
                <th>UserId</th>
                <th>Title<button style={{marginLeft:'5px'}} onClick={()=> sort('title')}><FaSortDown/></button></th>
              
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {
        data && data.map((todo)=> (
                <tr key= {todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.userId}</td>
                    <td>{todo.title}</td>
                   
                    <td>
                   
                   <Link to={`/details/${todo.id}`}>View Details</Link>
                   
                    </td>
                </tr>
        )
        )
    }
        </tbody>
    </table>
    )
}
export default Group