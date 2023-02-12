import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { toRed } from './themeSlice';
function Theme() {

    const [color, setColor] = useState('black');
    const dispatchTheme = useDispatch();

    const colorChangeHandler = () =>{
        dispatchTheme(toRed(color));
    }
  return (
    <div>
        <input type="text" onChange={(e)=>setColor(e.target.value)} value={color}/>
        <button onClick={colorChangeHandler}>Change Text Color</button>
        {/* <h1 style={{color: `${color}`}}>Here The color is changing</h1> */}
        {/* <h1>{color}</h1> */}
    </div>
  )
}

export default Theme;