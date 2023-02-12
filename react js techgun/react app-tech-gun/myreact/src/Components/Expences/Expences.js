import React from 'react';

import './Expences.css';

import ExpenceItem from './ExpenceItem';

let Expences = (props) => {
    return (
        <div className='expences'>
            {/* using Map function to fetch the data throught loop */}

            {
                props.item.map(expence =>(
                    <ExpenceItem
                        date={expence.date}
                        title={expence.title}
                        amount={expence.amount} />
                ))
            }
            
            {/* <ExpenceItem
                date={props.item[0].date}
                title={props.item[0].title}
                amount={props.item[0].amount} />

            <ExpenceItem
                date={props.item[1].date}
                title={props.item[1].title}
                amount={props.item[1].amount} />

            <ExpenceItem
                date={props.item[2].date}
                title={props.item[2].title}
                amount={props.item[2].amount} />

            <ExpenceItem
                date={props.item[3].date}
                title={props.item[3].title}
                amount={props.item[3].amount} /> */}
        </div>
    )
}

export default Expences;