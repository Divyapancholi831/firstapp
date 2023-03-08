import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Details = () =>
{
    const params = useParams();
    console.log("param",params);
    let [img,setImg] = useState('');
    async function requestImg()
    {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${params.id}`);
        const json =await res.json();
        console.log("json",json);
        setImg(json[0].url);
    }
    useEffect(() => {
        requestImg();
    },[])

    return (
        <div>
            <img src={img} />
        </div>
    )
}
export default Details;