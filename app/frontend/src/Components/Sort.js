import React, {useState} from 'react';
import Toggle from './Toggle';
const Sort = () => {
    const [price, setPrice] = useState(0)
    const [rating, setRating] = useState(0)
    return (
        <div className='Sort'>
            <Toggle name="Price"/>
            <Toggle name="Rating"/>
        </div>
    );
};

export default Sort;