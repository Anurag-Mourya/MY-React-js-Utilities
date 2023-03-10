import React from 'react';

import './Card.css';

const Card = (props) =>{
    var cls = 'card ' + props.className;
    return <div className={cls}>{props.children}</div>
}

export default Card;