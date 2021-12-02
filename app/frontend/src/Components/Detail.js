import React, { useEffect, useState } from 'react';
import apiEndPoints from './ApiEndpoints';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Card from './Card';

function Details (props) {
    const [tutors, setTutors] = useState([]);
    const [singleTutor, setSingleTutor] = useState([]);
    const [users, setUsers] = useState([]);

    const getUsers = async() => {
        const data = await apiEndPoints.getTutorData()
        setUsers ( preVal => data.data )
    }

    // const getSingleTutor = async() => {
    //     const data = await apiEndPoints.getTutorData ( course, star )
    //     getSingleTutor ( preVal => data.data )
    // }

    useEffect (() => {
        getUsers()
        // getSingleTutor()
    },[]);
    const location = useLocation()
    return(
        <div className='wrapper'>
            {/* <p>{location.state?.star} and {location.state?.search}</p> */}
            {
                users.map(user => <Card name = { user.name } subject = { user.email }/>)
            }
        </div>
    );
}

export default Details;