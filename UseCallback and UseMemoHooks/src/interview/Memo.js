/*
-- Definition --When A logic is taken lot of time to run and it will do slow our application performance and also impacting or calling to other functions or elements(or intire application become slow) then we use useMemo hook. besically it returns a memoized value. That means it returns the function result or value which is stored inside the cache.The useMemo Hook use two parameter 1st is calculationFunction and 2nd is any dependencies Which means the function run when dependencies is changed.

--where we use --- A logic which is taken lot of time to run a do slow our application, a logic is empacting to other functions, to save to call unwanted functions

--Difference between useMemo and useCallback Hooks -- use memo and use callback is used for performance optimization that means better the app performance.Function return a result(1,2,3 click on btn) or value is stored inside cache but in useCallback we stored all the functions inside the cache... The useMemo and useCallback Hooks are similar.useCallback stored a callbackfunction and memo is stored a memozed value. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.//w3s
*/



// // PROBLUM
import React,{useState} from 'react'

function Memo() {
   const [counterOne, setCounterOne] = useState(0)//1
   const [counterTwo, setCounterTwo] = useState(0)//1

    const counterHndler1 = () => {//3
        setCounterOne(counterOne + 1);

    }

    const counterHndler2 = () => {//3
        setCounterTwo(counterTwo + 1)
    }
    const isEven = () =>{//4
        console.log('second btn is also called')//7// when we click btn 1st it will affeted to second btn while we are working in 1st btn...

        let i = 0//6
        while (i<200000000) i++//6 //now it will do the slow our application performance(click btn one, and two) and it will also impact to second btn. - (a logic is impacting to other functions (written in above))

        return counterOne%2 === 0;//4
    }
    return (
        <div>
            {/* 2 */}
            <button onClick={counterHndler1}>counterOne - {counterOne}</button>
            {/* 5 */}
            <span>{isEven()?'Even':'Odd'}</span>
            {/* 2 */}
            <button onClick={counterHndler2}>counterTwo -{counterTwo}</button>
        </div>
    )
}

export default Memo


// SOLUTION

// // PROBLUM
// import React, { useState, useMemo } from 'react'//1 

// function Memo() {
//     const [counterOne, setCounterOne] = useState(0)
//     const [counterTwo, setCounterTwo] = useState(0)


//     const counterHndler1 = () => {
//         setCounterOne(counterOne + 1);

//     }

//     const counterHndler2 = () => {
//         setCounterTwo(counterTwo + 1)
//     }

//    const isEven = useMemo(() => {//2 // these are the cache values
//         console.log('only one btn is called');

//         let i = 0;

//         while (i < 200000000) i++

//         return counterOne % 2 === 0;
//     } ,[counterOne])//when the value of 1st btn is changed only call...
    
//     return (
//         <div>

//             <button onClick={counterHndler1}>counterOne - {counterOne}</button>

//             <span>{isEven ? 'Even' : 'Odd'}</span>

//             <button onClick={counterHndler2}>counterTwo -{counterTwo}</button>
//         </div>
//     )
// }

// export default Memo