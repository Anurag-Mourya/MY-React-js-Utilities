// now we want to provide the data of this component..
// then we use following steps 1. createContext 2. Provide Data 3. Use or Consume Data....


import React from "react";
import { createContext  } from "react";
import ChildC from './ChildC';

const data = createContext();
export default function App(){
    const name = 'Anurag Mourya';
    return(
        <>
        {/* now we want to provide the data of this component to componet <ChildC/>*/}
        <data.Provider value={name}>
            {/* what we want to provide a value to this component to <ChildC/> component */}
              <ChildC />
        </data.Provider>
        </>
    );

}

export {data};//because it a variable...