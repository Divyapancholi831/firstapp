import { useEffect, useState } from "react"

const JsonAlbum = () => {
    const [album,setElbum] = useState([]);
    async function requestElbum(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/albums`);
        const json = await res.json();
        console.log("json",json); 
        setElbum(json);
    }
    console.log("Albums",album);
    useEffect(()=>{
        requestElbum();
    },[])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>    
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {album.map((obj)=> 
                    <tr>
                    <td>{obj.id}</td>
                    <td>{obj.title}</td>
                    </tr>
                    )}  
                </tbody>
            </table>
        </div>
    )
} 

export default JsonAlbum