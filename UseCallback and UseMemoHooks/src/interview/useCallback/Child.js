//1.

// Problum - {/* When we click on btn clild component is also called*/}
// import React from 'react'

const Child = () => {

    console.log('Child Component is called when click on btn in Parent component');

  return (
    <div>Child component</div>
  )
}

export default Child;


// solution- We export child component inside the memo function

// import React,{memo} from 'react'
// const Child = () => {

//     console.log('Child Component is called when click on btn in Parent component');

//   return (
//     <div>Child component</div>
//   )
// }

// export default memo(Child)

 //2.

// // Problum 2 - When we pass props to child componet it will do behave same before like that while we are not displayed datas in child component. until we pass memo inside it...



// import React,{memo} from 'react'
// const Child = () => {

//     console.log('Child Component is called when click on btn in Parent component');

//   return (
//     <div>Child component</div>
//   )
// }

// export default memo(Child)

// Solution -- is in Prent component

// import React,{memo} from 'react'
// const Child = ({count2,functionva}) => {

//     console.log('Child Component is called when click on btn in Parent component');

//   return (
//     <div>Child component
//        <h1>count2 - {count2}</h1>
//        <h1>count2 - {functionva}</h1>
//     </div>
//   )
// }

// export default memo(Child)