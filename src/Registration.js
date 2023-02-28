import {useState} from "react";
export const Registration = () => {

    let [fname,setFirstname] = useState("");
    let [mname,setMiddlename] = useState("");
    let [lname,setLastname] = useState("");
    let [add,setAdd] = useState("");
    let [email,setEmail] = useState("");
    let [pass,setPass] = useState("");
    let [confirmpass,setCpassword] = useState("");
    let [gender,setGender] = useState("");
    let [view,setView] = useState(false);
    
    return (
        <div>
            <label>
                First Name : 
                <input value = {fname} onChange = {(e)=>setFirstname(e.target.value)} />
            </label>
            <br/>

            <label>
                Middle Name :
                <input value = {mname} onChange = {(e)=>setMiddlename(e.target.value)} />
            </label>
            <br/>

            <label>
                Last Name :
                <input value = {lname} onChange = {(e)=>setLastname(e.target.value)} />
            </label>
            <br/>

            <label>
                Address :
                <input value = {add} onChange = {(e)=>setAdd(e.target.value)} />
            </label>
            <br/>

            <label>
                Email :
                <input type = "email" value = {email} onChange = {(e)=>setEmail(e.target.value)} />
            </label>
            <br/>

            <label>
                Password :
                <input type = "password" value = {pass} onChange = {(e)=>setPass(e.target.value)} />
            </label>
            <br/>

            <label>
                Confirm Password :
                <input type = "password" value = {confirmpass} onChange = {(e)=>setCpassword(e.target.value)} />
            </label>
            <br/>

            <label>
                Gender : 
                <input value = {gender} onChange = {(e)=>setGender(e.target.value)} />
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
                <p>Email : {email}</p>
                <p>Password : {pass}</p>
                <p>Confirm Password : {confirmpass}</p>
                <p>Gender : {gender}</p>
                
            </div>
                ) : null }                
        </div>
    )
}