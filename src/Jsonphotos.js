import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Jsonphotos = () => {
    let [photos,setPhotos] = useState([]);
    async function requestPhotos (){
        const res =  await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const json = await res.json();
        setPhotos(json);
        console.log("json",json);
    }
    useEffect(() => {
        requestPhotos();
    },[]
    )
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>AlbumId</th>
                        <th>Title</th>
                        <th>Url</th>
                        <th>ThumbnailURL</th>
                    </tr>
                </thead>
                <tbody>
                {photos.map((obj) =>
                    <tr>
                        <td>{obj.albumId}</td>
                        <td>{obj.title}</td>
                       <Link to={`/details/${obj.id}`}> <td><img src={obj.url} width="50" height="50"/></td></Link>
                        <td>{obj.thumbnailUrl}</td>
                    </tr>
                )}    
                </tbody>
            </table>
        </div>
    );
}