import React from 'react';
import { useSelector } from 'react-redux';

function ChangeColor() {

    const theme = useSelector((state)=>state.theme.color);
    console.log(theme)
  return (
    <div><h1 style={{color: `${theme}`}}>The color is changing....</h1></div>
  )
}

export default ChangeColor;