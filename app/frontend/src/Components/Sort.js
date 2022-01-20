import React, { useState } from 'react';
import Toggle from './Toggle';
const Sort = ({ sortCourses, category }) => {
  const [price, setPrice] = useState(0)
  const [rating, setRating] = useState(0)
  return (
    <div className='Sort' style={{ display: 'flex', alignItems: "center" }}>
      Apply sorting :
      {
        category === "course" &&
        <Toggle sortCourses={sortCourses} name="Price" />
      }
      <Toggle sortCourses={sortCourses} name="Rating" />
    </div>
  );
};

export default Sort;