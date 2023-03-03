import { useEffect,useState } from "react"

export const Tablejson = () =>{
    let [todos,setTodos] = useState([]);

    async function requestTODOs(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const json = await res.json();
        console.log(json);
        setTodos(json);
    }
    useEffect(()=>{
        requestTODOs();
    },[])
    return (
    <div>
        <table>
        <td>ID</td>
        <td>Title</td>
        <td>Completed</td>
        </table>
        <h1>Table of TODOs</h1>
        


    </div>
    )
}