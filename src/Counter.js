import { useState } from "react";
export const Counter = () => {

    let [count,setCounter] = useState(0);
    

    return (
        
        <div>
            <h1>{count}</h1>
            <br/>
            <button onClick={() => setCounter(count + 1) }> Increment </button>
            <button onClick={() => setCounter(count - 1) } disabled={count<=0}> Decrement </button>
        </div>

    );
}

