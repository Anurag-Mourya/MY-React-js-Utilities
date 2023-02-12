import React, { useContext } from 'react';
import Counter from './Components/Counter';
import { createCounterContext } from './Context/Counter';




function App() {
    const counterState = useContext(createCounterContext);//read the state inside the createCounterContext and use in useContext  in this component... Now we are stablised the connection of createCounterContext to componets trought counterState. as given in the img..
    console.log(counterState);
    return (
        <div className='text-center'>
            <h1>Count is - {counterState.count}</h1>

            <Counter />
            <Counter />
            <Counter />
            <Counter />

        </div>
    )
}

export default App;