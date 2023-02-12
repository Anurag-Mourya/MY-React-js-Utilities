import React, { useState } from 'react';

import "./ExpenceItem.css";

// /*function ExpenceItem() {
//     let title = 'Car Insurence';

//   return ( 
//   <div>
//       <div className="expence-item">
//           <div className="expence-date">May 09 2022</div>
//           <div className="expence-item-description">

//            <h2>Car Insurence</h2> 

//              <h2>{title}</h2>

//               <div className="expence-item-price">$200</div>
//           </div>
//       </div>
//   </div>
//   );

// }*/
// props...

// function ExpenceItem(props){
//     return(
//         <div>
//            <div className="expence-item">
//                {/* for get full date */}
//           <div className="expence-date"> {props.date.toISOString()}</div>
//           <div className="expence-item-description">
//              <h2>{props.title}</h2>
//               <div className="expence-item-price">$200</div>
//           </div>
//       </div>
//       </div>
//     )
// }


// now we can get the date object indivisualy
// function ExpenceItem(props){

//     const day = props.date.toLocaleString('en-US',{day: '2-digit'});
//     const month = props.date.toLocaleString('en-US',{month: 'long'});
//     const year = props.date.getFullYear();
//     return(
//         <div>
//            <div className="expence-item">
//           <div className="expence-date">
//               <div>{day}</div>
//               <div>{month}</div>
//               <div>{year}</div>
//               </div>
//           <div className="expence-item-description">
//              <h2>{props.title}</h2>
//               <div className="expence-item-price">${props.amount}</div>
//           </div>
//       </div>
//       </div>
//     )
// }

//use date to another component...
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";

var ExpenceItem = (props) => {

//her we are using useState method ..

    // const [newTitle, setNewTitle] = useState('');

    // const changeHandlar = (event) =>{
    //     setNewTitle(event.target.value);
    // }
    // const [title, setTitle] = useState(props.title);//this is the arry destructuring..

    // const clickHandlar = () =>{
    //    setTitle(newTitle);
    // }

    return (
        <div>
            <Card className="expence-item">
                <div>
                    <ExpenceDate date={props.date} />
                </div>
                <div className="expence-item-description">
                    <h2>{props.title}</h2>
                    <div className="expence-item-price">${props.amount}</div>
                </div>
                {/* <input type='text' value={newTitle} onChange ={changeHandlar}/>
                <button onClick={ clickHandlar }>Change title</button> */}
            </Card>
        </div>
    )
}

export default ExpenceItem;
