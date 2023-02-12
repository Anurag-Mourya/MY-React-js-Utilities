// In this component we are creation the context api...

import React, { createContext, useState } from 'react';

export const createCounterContext = createContext();//we can givent the default value inside the createContext funtion as we was given in useState..

// now we are going to create a contextProvider because we want to given all the access of state in each components
export const CreateCounterProvider = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>

            <createCounterContext.Provider value={{count, setCount, Name: 'Anurag'}}>
                {/* value is the actual value to access all the components. What we pass here */}

                {props.children}
                {/*we are wraping all the childrens components inside the provider ex. all the clildren present in app component */}

            </createCounterContext.Provider>
            {/* Privider ke andar hum us component to warap krte hai jisme humko data pass krna hota hai */}

        </div>
    )
}
