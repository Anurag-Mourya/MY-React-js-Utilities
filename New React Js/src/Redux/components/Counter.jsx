import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../features/counterSlice';
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const despatch = useDispatch();
  return (
    <div><button onClick={() => despatch(increment())} className='btn border'>Incriment</button>
      <span>&nbsp;{count}&nbsp;</span>
      <button onClick={() => despatch(decrement())} className='btn border'>Derement</button>
    </div>

  )
}

export default Counter