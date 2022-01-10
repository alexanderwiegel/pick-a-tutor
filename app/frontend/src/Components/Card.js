import React from 'react';

function Card({ name, courses }) {
  return (
    <div className='card'>
      <div className='card__body'>

        {/* <img src= {props.img} /> */}
        <h2 className='card__title'>{name}</h2>
        {
          courses.map(course => <h2>{course.name} </h2>)
        }
      </div>
      {/* <link to = {props.where}>View Details</link> */}
    </div>
  )
}

export default Card;