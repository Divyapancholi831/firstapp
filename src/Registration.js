import {useState} from "react";
export const Registration = () => {

    let States = ['Alabama','Alaska','Arizona','Arkansas','California','Delaware','Illinois','Florida','Georgia','Hawaii'];
    let Educations = ['Primary School','Secondary School','Diploma','Bachelor degree','Master degree','Phd degree'];
    let [fname,setFirstname] = useState("");
    let [mname,setMiddlename] = useState("");
    let [lname,setLastname] = useState("");
    let [add,setAdd] = useState("");
    let [email,setEmail] = useState("");
    let [pass,setPass] = useState("");
    let [confirmpass,setCpassword] = useState("");
    let [gender,setGender] = useState("");
    let [date,setDate] = useState();
    let [view,setView] = useState(false);
    let [state,setState] = useState("");
    let [education,setEducation] = useState('');
    let [socialmedia,setSocialmedia] = useState({
        facebook : false,
        instagram : true,
        linkedin : true,
        twitter : true
    });
    
    

    function handleChange(e){
       if(e.target.type === "checkbox")
       {
            setSocialmedia({...socialmedia})
       }
    }

    return (
        <div>
            <label>
                First Name : 
                <input value = {fname} onChange = {(e)=>setFirstname(e.target.value)} />
            </label>
            <br/>
            <br/>

            <label>
                Middle Name :
                <input value = {mname} onChange = {(e)=>setMiddlename(e.target.value)} />
            </label>
            <br/>
            <br/>

            <label>
                Last Name :
                <input value = {lname} onChange = {(e)=>setLastname(e.target.value)} />
            </label>
            <br/>
            <br/>

            <label>
                Address :
                <input value = {add} onChange = {(e)=>setAdd(e.target.value)} />
            </label>
            <br/>
            <br/>

            <label>
                State :
                <select value={state} onChange={(e) => setState(e.target.value)}>
                    {States.map((animal,index)=> (<option key={index}>{animal}</option>))}
                </select>
            </label>
            <br/>
            <br/>

            <label>
                Birth Date :
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </label>
            <br/>
            <br/>
 
            <label>
                Education :
                <select value={education} onChange={(e) => setEducation(e.target.value)}>
                    {Educations.map((education,index) => <option key={index}>{education}</option>)}
                </select>
            </label>
            <br/>
            <br/>

            <label>
                Email :
                <input type = "email" value = {email} onChange = {(e)=>setEmail(e.target.value)} />
            </label>
            <br/>
            <br/>

            <label>
                Password :
                <input type = "password" value = {pass} onChange = {(e)=>setPass(e.target.value)} />
            </label>
            <br/>
            <br/>

            <label>
                Confirm Password :
                <input type = "password" value = {confirmpass} onChange = {(e)=>setCpassword(e.target.value)} />
            </label>
            <br/>
            <br/>

            <label>
                Gender : 
                <input type="radio" name="gander" value = "Male" onChange = {(e)=>setGender(e.target.value)} />Male
                <input type="radio" name="gander" value = "Female" onChange = {(e)=>setGender(e.target.value)} />Female
                <input type="radio" name="gander" value = "Transgender" onChange = {(e)=>setGender(e.target.value)} />Transgender
                <input type="radio" name="gander" value = "N/A" onChange = {(e)=>setGender(e.target.value)} />N/A
            </label>
            <br/>
            <br/>

            <label>
                Social media :
                <input type="checkbox" name="facebook" checked={socialmedia.facebook} onChange={handleChange}/>Facebook
                <input type="checkbox" name="instagram" checked={socialmedia.instagram} onChange={handleChange}/>Instagram
                <input type="checkbox" name="linkedin" checked={socialmedia.linkedin} onChange={handleChange}/>LinkedIn
                <input type="checkbox" name="twitter"  checked={socialmedia.twitter} onChange={handleChange}/>Twitter 
            </label>
            <br/>

            <label>
                <button onClick = {()=>setView(!view)}> View </button>
            </label>

            <br/>
            <br/>


        {view ? (
            <div>

                <p>First Name : {fname}</p>
                <p>Middle Name : {mname}</p>
                <p>Last Name : {lname}</p>
                <p>Address : {add}</p>
                <p>State : {state}</p>
                <p>Birth Date : {date}</p>
                <p>Eductaion : {education}</p>
                <p>Email : {email}</p>
                <p>Password : {pass}</p>
                <p>Confirm Password : {confirmpass}</p>
                <p>Gender : {gender}</p>
                <p>Social Media : {socialmedia}</p>
                
            </div>
                ) : null }                
        </div>
    )
}