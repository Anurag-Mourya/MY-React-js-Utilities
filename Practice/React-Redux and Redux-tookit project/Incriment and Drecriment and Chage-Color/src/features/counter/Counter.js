import React from 'react';
// import bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch} from 'react-redux';
import {incriment, drecriment, incrementByAmount} from './counterSlice'


function Counter() {
    const count = useSelector((state)=>state.counter.count);
    const dispatchCount = useDispatch();

    const incrementHnadler = () =>{
        dispatchCount(incriment())
    }

    
    const drecrimentHnadler = () =>{
        dispatchCount(drecriment(1))
    }

    const incrementByAmountHandler = () =>{
      dispatchCount(incrementByAmount(10))
  }
  return (
    <div className='text-center p-4'>
        <button onClick={(incrementHnadler)} className='btn btn-primary m-4 p-3 fs-2'>+</button>
        <span>{count}</span>
        <button onClick={(drecrimentHnadler)} className='btn btn-primary m-4 p-3 fs-2'>-</button>

        <button onClick={(incrementByAmountHandler)} className='btn btn-primary m-4 p-3 fs-2'>IncrementBy 10</button>
    </div>
  )
}

export default Counter