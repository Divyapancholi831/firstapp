import React from "react";
import Pet from "./Pet";
export const Results = (props) => {
    const pets = props.pets;
    console.log(pets);
    return(
        <div>
            {!pets.length ? (
                <h1>No pets found...</h1>
            ): (
                pets.map((pet) => (
                    <Pet 
                        key = {pet.id}
                        name={pet.name}
                        breed={pet.breed}
                        animal={pet.animal}
                        id={pet.id}
                        location={`${pet.city},${pet.state}`}/>
                ))
            )}
        </div>

    );

}