// because we are created external Expeces.css
// import ExpenceItem from "./Components/ExpenceItem";
import React, {useState} from 'react';

import Expences from "./Components/Expences/Expences";

import NewExpence from './Components/NewExpence/NewExpence';


/*function App() {
  return (
    <div>
      <div>
        <Menu></Menu>
      </div>
      <div>
        <h1>This is the ExpenceItem tracker</h1>
      </div>
      <ExpenceItem></ExpenceItem>

    </div>
  );
}*/

// use javascript as a variable...

// function App() {
//   let expencedate = new Date(2022, 3, 9);
//   let expenceetitle = "Cars Insurence";
//   let expenceamout = 200;
//   return (
//     <div>
//       <ExpenceItem
//         date={expencedate}
//         title={expenceetitle}
//         amount={expenceamout}
//       ></ExpenceItem>
//       <ExpenceItem
//         date={expencedate}
//         title={expenceetitle}
//         amount={expenceamout}
//       ></ExpenceItem>
//       <ExpenceItem
//         date={expencedate}
//         title={expenceetitle}
//         amount={expenceamout}
//       ></ExpenceItem>
//     </div>
//   );
// }

//now we are using multiple component with array object...

let DUMMY_EXPENCE = [
  {
    title : 'Cars Insurence',
    amount : 200,
    date : new Date(2020,3,9)
  },
  {
    title : 'Bike Insurence',
    amount : 150,
    date : new Date(2023,5,9)
  },
  {
    title : 'Skooty Insurence',
    amount : 100,
    date : new Date(2025,4,9)
  },
  {
    title : 'Biscyle Insurence',
    amount : 50,
    date : new Date(2022,3,9)
  }
];


const App = () => {
  // let expencedate = new Date(2022, 3, 9);
  // let expenceetitle = "Cars Insurence";
  // let expenceamout = 200;

  // let expences = [
  //   {
  //     title : 'Cars Insurence',
  //     amount : 200,
  //     date : new Date(2020,3,9)
  //   },
  //   {
  //     title : 'Bike Insurence',
  //     amount : 150,
  //     date : new Date(2023,5,9)
  //   },
  //   {
  //     title : 'Skooty Insurence',
  //     amount : 100,
  //     date : new Date(2025,4,9)
  //   },
  //   {
  //     title : 'Biscyle Insurence',
  //     amount : 50,
  //     date : new Date(2022,3,9)
  //   }
  // ];

    const [expences, setExpences] = useState(DUMMY_EXPENCE);

    const addExpenceHandler = (expence) =>{
      const updatedExpence =  [expence, ...expences];
      setExpences(updatedExpence);
    }; 

  return (
    <div>
      {/* <ExpenceItem
        date={expences[0].date}
        title={expences[0].title}
        amount={expences[0].amount}
      ></ExpenceItem>
      <ExpenceItem
        date={expences[1].date}
        title={expences[1].title}
        amount={expences[1].amount}
      ></ExpenceItem>
      <ExpenceItem
        date={expences[2].date}
        title={expences[2].title}
        amount={expences[2].amount}
      ></ExpenceItem>
       <ExpenceItem
        date={expences[3].date}
        title={expences[3].title}
        amount={expences[3].amount}
      ></ExpenceItem> */}

     
        <NewExpence onAddExpence = { addExpenceHandler }/>
         {/* use Expences  */}
        <Expences item = {expences}/>

    </div>
  );
}
export default App;

//3: 48m
