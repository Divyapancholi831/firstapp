import { useState,useEffect } from "react";
import Pet from "./Pet";
import { Results } from "./Results";
import  useBreedList  from "./useBreedList";
const ANIMALS  =  ['dog','bird','cat','rabbit','reptile'];

export const SearchParam = () => {
    let [location,setLocation] = useState('');
    let [animal,setAnimal] = useState('');
    let [breed,setBreed] = useState('');
    let [pets,setPets] = useState([]);
    const BREED = useBreedList(animal);

    useEffect(()=>{
        requestPets();
    },[])

    async function requestPets(){
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const json = await res.json();
        console.log("json",json);
        setPets(json.pets);
    }
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }}>
            <label>
            Location :
            <input name="location" type={location} onChange={(e) => setLocation(e.target.value) }/>
            </label>
            <br/>

            <label>
            Animal :
            <select value={animal} onChange={(e) => setAnimal(e.target.value)}>
            {ANIMALS.map((animal,index)=>
                <option key={index}>{animal}</option>
            )}
            </select>
            </label>
            <br/>

            <label>
            Breed :
            <select value={breed} onChange={(e) => setBreed(e.target.value) }>
                <option></option>
                {BREED.map((breed)=>
                    <option>{breed}</option>
                )}
            </select>
            </label>
            <br/>
            <button>Submit</button>
            </form>
            {/* {pets.map((pet) => 
                <Pet name={pet.name} breed={pet.breed} animal={pet.animal}/>
             )} */}
            <Results pets={pets}/>
            
        </div>
    );
};