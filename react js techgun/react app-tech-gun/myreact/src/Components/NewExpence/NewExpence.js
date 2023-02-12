import React from "react";

import './NewExpence.css';

import ExpenceForm from "./ExpenceForm";
 

const NewExpence = (props) =>{

    // for taken data form ExpenceForm.js
    const saveExpenceDataHandler = (enterdExpenceData) =>{

        // add id 
        const expenceData = {
            ...enterdExpenceData,
            id: Math.random().toString()
        }
            props.onAddExpence(expenceData);
        // console.log(enterdExpenceData);
        console.log(expenceData);
    };

    return(
        <div className="new-expence">
           <ExpenceForm onSaveExpenceData = { saveExpenceDataHandler }/>
        </div>
    )
}

export default NewExpence;