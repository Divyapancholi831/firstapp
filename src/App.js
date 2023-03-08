import './App.css';
import { Counter } from './Counter';
import RegisterDemo from './RegisterDemo';
import JsonAlbum from './JsonAlbum';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
// import { Login } from './Login';
// import Test from "./Test"
import { Registration } from './Registration';
import { Tablejson } from './Tablejson';
import JsonComments from './JsonComments';
import { Jsonpost } from './Jsonpost';
import { Jsonphotos } from './Jsonphotos';
import { Jsonusers } from './Jsonusers';
import { SearchParam } from './SearchParam';
import Pet from './Pet';
import  useBreedList  from './useBreedList';
import Details from './Details';
function App() {
  // let name = "Divya";
  // let lname ="Pancholi";
  // let arr = ['a','b'];
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/photos">photos</Link>
      <Link to="/album">Album</Link>
      <Link to="/comments">Comments</Link>
      <Link to="/post">Post</Link>
    </nav>
    <Routes>
      
      <Route element={<Jsonphotos/>} path="/photos"></Route>
      <Route element={<Details/>} path="/details/:id"></Route>
      <Route element={<JsonAlbum/>} path="/album"></Route>
      <Route element={<JsonComments/>} path="/comments"></Route>
      <Route element={<Jsonpost/>} path="/post"></Route>
      <Route element={<SearchParam/>} path="/"></Route>
    </Routes>
    </BrowserRouter>
    // // <div className="App">
    //   {/* <Login/>
    //   <Test name={name} lname={lname} arr={arr}></Test> */}
    //   {/* <Registration/> */}
    //   {/* <Counter/> */}
    //   {/* <RegisterDemo/> */}
    //   {/* <Tablejson/> */}
    //   {/* <JsonAlbum/> */}
    //   {/* <JsonComments/> */}
    //   {/* <Jsonpost/> */}
    //   {/* <Jsonphotos/> */}
    //   {/* <Jsonusers/> */}
    //   {/* <SearchParam/> */}
    //   {/* <useBreedList/> */}
    //   {/*<Pet name="pluto" animal="dog" breed="labrador"/> */}
    // // </div>
  );
}
export default App;
