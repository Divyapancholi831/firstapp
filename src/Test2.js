import React from 'react';
import Test3 from './Test3';
const Test2 = (props) => {
    const gender = props.gender;
    const nationality = props.nationality;
    return (
        <div>
            <h2>Gender : {gender}</h2>
            <h2>Nationality : {nationality}</h2>
            <Test3 email = "abc@gmail.com"></Test3>
        </div>
    );
}

export default Test2;