
import Test2 from './Test2';
const Test1 = (props) => {
    const location = props.location;
    const state = props.state;
    const name = props.name;
    return (
        <div>
            <h2>Location : {location}</h2>
            <h2>State : {state}</h2>
            <h2>Name : {name}</h2>
            <Test2 gender = "female" nationality = "Indian"></Test2>
        </div>
    );
}

export default Test1;