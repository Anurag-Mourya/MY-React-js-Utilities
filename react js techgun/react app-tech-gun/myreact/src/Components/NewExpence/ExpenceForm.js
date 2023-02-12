import React, { useState } from "react";
import './ExpenceForm.css';

const ExpenceForm = (props) => {

    //create variable for update the functions...
    
    const [enterdTitle, setEnterdTitle] = useState('');
    const [enterdAmount, setEnterdAmount] = useState('');
    const [enterdDate, setEnterdDate] = useState('');

    const titleChangHandlar = (event) => {
        setEnterdTitle(event.target.value);
    }
 
    const amountChangeHandlar = (event) => {
        setEnterdAmount(event.target.value);
    }

    const dateChangeHandlar = (event) => {
        setEnterdDate(event.target.value);
    }

    const submitHandlar = (event) =>{
            event.preventDefault();

            //to submit the data creat an object...

            const expenceData = {
                title : enterdTitle,
                amount : enterdAmount,
                date : new Date(enterdDate)
            }

            props.onSaveExpenceData(expenceData);
            console.log(expenceData);
 
            setEnterdTitle('');
            setEnterdAmount('');
            setEnterdDate('');
    }

    return (
        <form onSubmit={ submitHandlar }>
            <div className="new-expence_controls">

                <div className="new-expence_control">
                    <label>Title</label>
                    {/*titleChangHandlar will excute when we change this input field */}
                    <input type='text' value={enterdTitle} onChange={titleChangHandlar} />
                </div>
                <div className="new-expence_control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enterdAmount} onChange={amountChangeHandlar} />
                </div>
                <div className="new-expence_control">
                    <label>Date</label>
                    <input type='date' value={enterdDate} onChange={dateChangeHandlar} />
                </div>

                <div className="new-expence_action">
                    <button type='submit'>Add Expence</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenceForm;