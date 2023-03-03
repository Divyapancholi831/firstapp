import { useState } from "react";

const RegisterDemo = () => {
    
    let EDUCATION = ['Primary School','Secondary School','High School','Bachelor Degree','Master Degree','Phd'];
    let [firstname,setFirstname] = useState ('');
    let [gander,setGender] = useState ('');
    let [education , setEducation] = useState('');
    let [hobbies ,setHobbies] = useState ('');
    let [show,setShow] =useState(false);



    return (
        <div>
            <label>
                First Name  :
                <input value={firstname} onChange={(e) => setFirstname(e.target.value) }/>
            </label>
            <br/>
            <br/>

            <label>
                Gender  :  
                <input type="radio" name="gender"  value="Male" onChange={(e) => setGender(e.target.value)} />Male
                <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)}/>Female
                <input type="radio" name="gender" value="Transgender" onChange={(e) => setGender(e.target.value)}/>Transgender
                <input type="radio" name="gender" value="N/A" onChange={(e) => setGender(e.target.value)}/>N/A
            </label>
            <br/>
            <br/>

            <label>
                Education : 
                <select name="education" onChange={(e) => setEducation(e.target.value)} >
                    {EDUCATION.map((name,index)=> <option key={index}>{name}</option>)}
                </select>
            </label>
            <br/>
            <br/>


            <label>
                Hobbies  :
                <input type="checkbox"  name="reading"/>Reading
                <input type="checkbox" name="writting"/>Writting
                <input type="checkbox" name="dancing"/>Dancing
            </label>
            <br/>
            <br/>

            <label>
                <button onClick={() => setShow(!show)}>Show</button>
            </label>

        {show ? (
            <div>
                 <p>First Name : {firstname}</p>
                 <p>Gander : {gander}</p>
                 <p>Education : {education} </p>
                 <p>Hobbies : {hobbies}</p>
            </div>

        ) : null}  


        </div>

        
    )
}

export default RegisterDemo;