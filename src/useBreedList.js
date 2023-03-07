import {useState,useEffect} from 'react';
const useBreedList = (animal) => {
    let [breedList,setBreedlist] = useState([]);

    useEffect(()=>{
        if(!animal){
            setBreedlist([]);
        }else{
        requestBreedList();
        }
    },[animal]);

    async function requestBreedList(){
        const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
        const json = await res.json();
        console.log("json",json);
        setBreedlist(json.breeds);
        console.log("breeds",json.breeds);
    }

    
    return breedList;
};

export default useBreedList;