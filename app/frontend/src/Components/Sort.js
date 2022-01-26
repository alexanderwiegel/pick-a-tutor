import React, { useState } from 'react';
import Toggle from './Toggle';
const Sort = ({ sortCourses, sortUsers, category }) => {
  const [price, setPrice] = useState(0)
  const [rating, setRating] = useState(0)
  return (
    <div className='Sort' style={{ display: 'flex', alignItems: "center" }}>
      Apply sorting :
      {
        category === "course" &&
        <Toggle sortCourses={sortCourses} name="Price" category={category} />
      }
      <Toggle sortCourses={sortCourses} sortUsers={sortUsers} name="Rating" category={category} />
    </div>
  );
};

export default Sort;