import React from 'react';
import { data } from './App';//this is the  consume data from App component to this component

export default function ChildC() {
  return (
    <div>
        
        {/* inside this waraper it is always return a function... */}
        <data.Consumer>
            {
                (name)=>{
                    return(
                        <div>
                            <h1> My name is { name } </h1>
                        </div>
                    )
                }
            }
        </data.Consumer>    
     </div>
  )
}
