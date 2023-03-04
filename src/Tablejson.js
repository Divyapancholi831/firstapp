import { useEffect,useState } from "react"

export const Tablejson = () =>{
    let [todos,setTodos] = useState([]);
    
     // const tableheader = () =>
    // {
    //     let knames = Object.keys.todos[0];
    //     console.log(knames);
    //     return knames.map((k)=> 
    //     <th key={k}>
    //         {k.toUpperCase()}
    //     </th>)
    // }

    // const tablebody = () => {

    // }
   
    useEffect(()=>{
        requestTODOs();
    },[])

    async function requestTODOs(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const json = await res.json();
        console.log(json);
        setTodos(json);
        // const firstindex = todos[0];
        // console.log(firstindex);
    }
console.log("todos",todos);

    return (
    <div>
        <table>
            <thead>
                <tr>   
                    <th>userId</th>
                    <th>Title</th>
                    <th>completed</th>
                </tr>
            </thead>
            <tbody>
                
                    {todos.map((todo)=>
                    <tr>    
                        <td>{todo.userId}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed}</td>
                    </tr>    
                    )}
               
            </tbody>
        </table>
    </div>
    )
}