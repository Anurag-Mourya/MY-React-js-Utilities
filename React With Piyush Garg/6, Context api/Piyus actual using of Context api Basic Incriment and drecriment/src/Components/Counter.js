import React, { useContext} from 'react';
import {createCounterContext} from '../Context/Counter';

function Counter() {
  const counterState = useContext(createCounterContext);


  return (
    <div>
        {/* these button we will change his data inside the context and also read inside the context */}
        <button onClick={() => { counterState.setCount(counterState.count+1 ) } }>Incriment</button>
        <button onClick={()=>{counterState.setCount(counterState.count-1)}}>Decriment</button>
    </div>
  )
}

export default Counter;