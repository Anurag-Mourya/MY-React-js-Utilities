// import React, { Component } from 'react';
// import Question from './Question';
// import Detail from './Detail';

// export class Container extends Component {
//     constructor(){
//         super();
//         this.state = {
//             name: null,
//             email: null,
//             isSubmitted: null,
//         }
//     }
//     render() {
//         return (
//            <div>
//             <div className="container-fluid">
//                 <div className="container card mt-3">
//                     <h1 className="text-center text-primary">WebDevelopment Survery</h1>
//                 </div>
//             </div>
//             {this.state.name === null && this.state.email === null ? <Detail/> : <Question/>}
           
//            </div>
//         ); 
//     }
// }
// export default Container



//1. handling the name and answer with state and manage the submit handler in details component...

// import React, { Component } from 'react';
// import Question from './Question';
// import Detail from './Detail';

// export class Container extends Component {
//     constructor(){
//         super();
//         this.state = {//this is for detail.js....
//             name: null,
//             email: null,
//             isSubmitted: null,
//         };
//     }

//     detailsubmitHandler = (event) =>{
//         const name = event.target.name;//here the email and name is come from details.js
//         const email = event.target.email;
//         this.setState({name,email});
//         event.preventDefault();
//     }
//     render() {
//         return (
//            <div>
//             <div className="container-fluid">
//                 <div className="container card mt-3">
//                     <h1 className="text-center text-primary">WebDevelopment Survery</h1>
//                 </div>
//             </div>
//             {this.state.name === null && this.state.email === null ? <Detail submit={this.detailsubmitHandler}/> : <Question/>}
           
//            </div>
//         ); 
//     }
// }
// export default Container


// 3. Now created the state for Question.js......


import React, { Component } from 'react';
import Detail from './Detail';
import Question from './Question';
import {v4 as uuidv4 } from 'uuid';
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCI0GGSyxRc6Vf7wioIm6-nPaAn4NF49Ac",
    authDomain: "webdevelopment-survey.firebaseapp.com",
    databaseURL: "https://webdevelopment-survey-default-rtdb.firebaseio.com",
    projectId: "webdevelopment-survey",
    storageBucket: "webdevelopment-survey.appspot.com",
    messagingSenderId: "554661773386",
    appId: "1:554661773386:web:84bacefdc13ca0f4b4a6b3"
  };
  if(firebase.apps.length < 0){
    firebase.initializeApp(firebaseConfig);
  }
export class Container extends Component {
    constructor(){
        super();
        this.state = {//this is for detail.js....
            id: uuidv4(),
            name: null,
            email: null,
            isSubmitted: null,
            questions: {
                q1: null,
                q2: null,
                q3: null,
                other: null,
            },
          
        };
    }

    detailsubmitHandler = (event) =>{
        const name = event.target.name;//here the email and name is come from details.js
        const email = event.target.email;
        this.setState({name,email},()=>{
            // console.log(this.state);
        });
        event.preventDefault();
    }

    questionSubmitHandler = (event) =>{
        // console.log(event.target);
        //we are providing all the data of question in a object...
        const questions = {}
        questions.q1 = event.target.q1.value;
        questions.q2 = event.target.q2.value;
        questions.q3 = event.target.q3.value;
        questions.other = event.target.other.value;
        this.setState({questions}, () =>{
            // console.log(questions);
        })
        console.log(questions);
        event.preventDefault();
        const database = firebase.database();
        database.ref("survey/" + this.state.id).set({
            name: this.state.name,
            email: this.state.email,
            questions: this.state.questions,
        });
    };
    render() {
        return (
           <div>
            <div className="container-fluid">
                <div className="container card mt-3">
                    <h1 className="text-center text-primary">WebDevelopment Survery</h1>
                </div>
            </div>
            {this.state.name === null && this.state.email === null ? <Detail submit={this.detailsubmitHandler}/> : <Question submit={this.questionSubmitHandler}/>}
           
           </div>
        ); 
    }
}
export default Container