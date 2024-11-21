
import { useState } from 'react';

export default function Counter (){

    const [counter, setCounter] = useState(0);

    return (
        <>
        <div>
            <h1>Counter </h1>
            <label>Count: {counter}</label>
            <div> 
                <button onClick={() => setCounter( counter + 1 )}>Increment</button>
                <button onClick={() => setCounter(0)}>Reset</button>
                <button onClick={() => setCounter( counter - 1)}>Decrement</button>
            </div>
        </div>
        </>
    )

}
