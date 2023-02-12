import React, {useContext} from 'react';
import {data, data1} from './App';

function ChildC() {
    const firstName = useContext(data);
    const gender = useContext(data1);
  return (
    <div>
        <h1>Hii My Name is {firstName}</h1>
        <h1>And My Gender is {gender}</h1>
    </div>
  )
}

export default ChildC;