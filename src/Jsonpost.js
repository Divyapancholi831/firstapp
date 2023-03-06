import {useState,useEffect} from "react";
export const Jsonpost = () => {
    let [post,setPost] = useState([]);
    async function requestPost(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const json = await res.json();
        setPost(json);
        console.log("json",json);
    }
    useEffect(() => {
        requestPost();
    },[]);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>

                <tbody>
                {post.map( (obj) =>     
                    <tr>
                    <td>{obj.userId}</td>
                    <td>{obj.title}</td>
                    <td>{obj.body}</td>
                    </tr>
                )}    
                </tbody>
            </table>
        </div>
    );
}