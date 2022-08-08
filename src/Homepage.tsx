import React, {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import Normal from './Normal'
import  Group  from "./Group";
import './App.css'
export interface Todo {
    title: string;
    id: number;
    userId: number;
    completed: boolean
}
const HomePage=()=> {
   
    const [data, setData]= useState<Todo[]> ([])
    const [view, setView]= useState("normal")
    const changeView= (view: "normal" | "group") =>{
        setView(view)

}
    useEffect(()=> {
        const fetchData= async ()=> {
          const res= await  fetch(' https://jsonplaceholder.typicode.com/todos', {
           headers: {
                "Content-Type": "aplication/json"
           }
            
          })
          console.log(res);
          const json= await res.json()
          return json

        }
        fetchData()
        .then(json=>{
             setData(json);
             console.log(json);
    })
    },[])
    return (
        <div className="container">
        <h2>Home Page</h2>
        <button onClick= {()=> changeView("normal")}>View Normal</button>
        <button onClick= {()=> changeView("group")}>Group By User Id</button>
       
        { (data && data.length > 0 && view==="normal") ?<Normal list={data}/>: ""} 
        { (data && data.length > 0 && view==="group") ?<Group list={data}/>: ""} 
        
        </div>
    )
}
export default HomePage