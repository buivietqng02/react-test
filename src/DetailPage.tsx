import React, { useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";
import { Todo } from "./Homepage";
import './App.css';
const DetailPage=()=> {
    let params:any = useParams();
    const [item, setItem]= useState<Todo>();
    useEffect(()=> {
        const getItem= async (id:number)=> {
            const data= await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            const json= await data.json();
            return json;
        } 
        getItem(params.id)
        .then(json=> setItem(json))
    })
    return (
        <div className="details-container">
        <Link to='/'>Home</Link>
        <div className="details">
       <h2>Detail Page</h2>
       <div className="details-info">
       {
        item && (
            <div>
            <p>Status: {item.completed ? "Completed" : "Not completed"}</p>
            <p>ID: {item.id}</p>
            <p>Title: {item.title}</p>
            <p>User ID: {item.userId}</p>
            </div>
        )
       }
       </div>
       </div>
        </div>
    )
}
export default DetailPage