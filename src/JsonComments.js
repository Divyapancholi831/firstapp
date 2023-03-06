import {useEffect,useState} from "react";
const JsonComments = () => {
    let [comments,setComment] = useState([]);
    async function requestComments(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        const json = await res.json();
        console.log("json",json);
        setComment(json);
    }
    //console.log("comments",comments);
    useEffect(()=>{
        requestComments();
    },[])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>PostId</th>
                        <th>It</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                {comments.map((obj)=> 
                <tr>
                <td>{obj.postId}</td>
                <td>{obj.it}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.body}</td>
                </tr>
                )}    
                </tbody>
            </table>
        </div>
    )
}

export default JsonComments
