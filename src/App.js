import './App.css';
import { Counter } from './Counter';
import RegisterDemo from './RegisterDemo';
import JsonAlbum from './JsonAlbum';
// import { Login } from './Login';
// import Test from "./Test"
import { Registration } from './Registration';
import { Tablejson } from './Tablejson';
import JsonComments from './JsonComments';
import { Jsonpost } from './Jsonpost';
import { Jsonphotos } from './Jsonphotos';
import { Jsonusers } from './Jsonusers';
function App() {
  // let name = "Divya";
  // let lname ="Pancholi";
  // let arr = ['a','b'];
  return (
    <div className="App">
      {/* <Login/>
      <Test name={name} lname={lname} arr={arr}></Test> */}
      {/* <Registration/> */}
      {/* <Counter/> */}
      {/* <RegisterDemo/> */}
      {/* <Tablejson/> */}
      {/* <JsonAlbum/> */}
      {/* <JsonComments/> */}
      {/* <Jsonpost/> */}
      {/* <Jsonphotos/> */}
      <Jsonusers/>
    </div>
  );
}
export default App;
