
import Test1 from "./Test1";
const Test = (props) => {
  const name = props.name;
  const lname= props.lname;
  const arr = props.arr;
    return (
        <div>
          <h1>Registration form for college students</h1>
          <h2>First Name : {name}</h2>
          <h2>Last Name : {lname}</h2>
          <h2>Names : {arr}</h2>
          <Test1 name = {name} location = "USA" state="Illinois"></Test1>
        </div>
    );
}

export default Test;
