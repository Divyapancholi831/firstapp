import { useEffect, useState } from "react";

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
                        <td><img src={obj.url}/></td>
                        <td>{obj.thumbnailUrl}</td>
                    </tr>
                )}    
                </tbody>
            </table>
        </div>
    );
}