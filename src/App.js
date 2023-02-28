import './App.css';
import { Counter } from './Counter';
// import { Login } from './Login';
// import Test from "./Test"
import { Registration } from './Registration';
function App() {
  // let name = "Divya";
  // let lname ="Pancholi";
  // let arr = ['a','b'];
  return (
    <div className="App">
      {/* <Login/>
      <Test name={name} lname={lname} arr={arr}></Test> */}
      <Registration/>
      {/* <Counter/> */}
    </div>
  );
}
export default App;
