// create, provider, usecontext...
import React, { createContext } from "react";
import ChildA from './ChildA';

const data = createContext();
const data1 = createContext();

export default function App() {
    const name = 'Anurag Mourya';
    const gender = 'Male';
    return (
        <div>
            <data.Provider value={name}>        
                <data1.Provider value={gender}>
                    <ChildA />
                </data1.Provider>
            </data.Provider>
        </div>
    );

}

export {data, data1}; 








