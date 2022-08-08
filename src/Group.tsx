
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { Todo } from './Homepage'
import './App.css'
interface Props {
    list: Todo[]
}
const Group:React.FC<Props>= (props)=> {
   const [arr, setArr]= useState<Todo[][]>([])
   
    const getArr= (list:Todo[])=> {
        let maxUserId=0;
        let arr=[];
        for(let i=0; i< list.length; i++) {
            if (maxUserId < list[i].userId) {
                maxUserId= list[i].userId
            }
        }
        for (let j=0; j<= maxUserId; j++) {
            for (let k=0; k<list.length; k++) {
                if (list[k].userId===j) {
                    if (arr[j]===undefined 
                        ) {
                        arr[j]=[list[k]]
                    } else {
                        arr[j].push(list[k])
                    }
                }
            }
        }
        return arr;
    }
    useEffect(()=> {
        setArr(getArr(props.list))
    },[])
    return (
        <>
       { arr.length >0  ? (
          <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Title</th>
                </tr>

            </thead>
            <tbody>
             {arr.map((item, index)=> (
                    <tr key={index} >
                        <td>{item[0].userId}</td>
                        <td>
                        <ul>
                        {item.map((l, index)=> <li key= {index}><Link to={`/details/${l.id}`}>{l.title}</Link></li>)}
                        </ul>
                        </td>
                    </tr>
                )
            )}  
            </tbody>
        </table> ) : ""
}
        </>
    ) 
}
export default Group