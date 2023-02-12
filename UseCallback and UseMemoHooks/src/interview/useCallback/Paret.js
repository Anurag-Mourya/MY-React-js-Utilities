//1.

// Problum - {/* When we click on btn clild component is also called*/}
//solution - 1st solution is in child compnent
import React, { useState } from 'react'
import Child from './Child';

const Paret = () => {
    const [count, setCount] = useState(0);

    const countHandler = () =>{
        setCount(count + 1);
    }
  return (
    <div>
        <Child/>
        <button onClick={countHandler}>Count - {count} </button>
        {/* When we click on btn clild component is also called*/}
    </div>
  )
}

export default Paret


// Problum 2 - When we pass props to child componet it will do behave same before like that while we are not displayed in child component. until we pass memo inside it...
// import React, { useState } from 'react'
// import Child from './Child';

// const Paret = () => {
//     const [count1, setCount1] = useState(0);//1
//     const [count2, setCount2] = useState([]);//2

//     const countHandler = () =>{//1
//         setCount1(count1 + 1);
//     }

//     //2
//     const fun = ()=>{
//         console.log('Hello Anurag')
//     }
//   return (
//     <div>
//         {/* 2 */}
//         <Child count2={count2} function={fun}/>
//         {/* 1 */}
//         <button onClick={countHandler}>Count - {count1} </button>
//     </div>
//   )
// }

// export default Paret


// // Solution -- we want to child component is called when we do some changes inside count2 state. then we do when count2 state is changed only the fun function is called throught the useCallback hook
// import React, { useCallback, useState } from 'react'
// import Child from './Child';

// const Paret = () => {
//     const [count1, setCount1] = useState(0);//1
//     const [count2, setCount2] = useState(0);//2

//     const countHandler = () =>{//1
//         setCount1(count1 + 1);
//     }

//     const count2Handler = () =>{//1
//         setCount2(count2 + 1);
//     }

//     //2
//     const fun= useCallback (()=>{
//         console.log('Hello Anurag');
//     },[count2]);
//   return (
//     <div>
//         {/* 2 */}
//         <Child count2={count2} functionva={fun}/>
//         {/* 1 */}
//         <button onClick={countHandler}>Count - {count1} </button>
//         <button onClick={count2Handler}>Count - {count2} </button>
//     </div>
//   )
// }

// export default Paret