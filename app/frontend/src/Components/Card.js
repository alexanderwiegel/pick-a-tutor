import React from 'react';

function Card (props) {
    return (
        <div className = 'card'>
            <div className='card__body'>
                {/* <img src= {props.img} /> */}
                <h2 className='card__title'>{props.name}</h2>
                <p className='card__description'>{props.subject}</p>
            </div>
            {/* <link to = {props.where}>View Details</link> */}
        </div>
    )
}

export default Card;