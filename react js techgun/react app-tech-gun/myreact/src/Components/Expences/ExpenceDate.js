import React from 'react';

import './ExpenceDate.css';

const ExpenceDate = (props) =>{
    const day = props.date.toLocaleString('en-US',{day: '2-digit'});
    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const year = props.date.getFullYear();
    return(
        <div className='expence-date'>
            <div className='expence-date_day'>{day}</div>
              <div className='expence-date_month'>{month}</div>
              <div className='expence-date_year'>{year}</div>
        </div>
    )
}

export default ExpenceDate;