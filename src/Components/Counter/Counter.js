'use client';

import { useState } from "react";


const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button className="btn btn-success mr-2 text-white" onClick={() => setCounter(counter + 1)}>
                Increase</button>
            <button className='btn btn-error text-white' onClick={() => setCounter(counter - 1)}>
                Decrease</button>
        </div>
        
    );
};

export default Counter;