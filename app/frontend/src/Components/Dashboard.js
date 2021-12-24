import React from 'react';
import { useState,useEffect } from 'react';
import SearchComponent from './SearchComponent';
import CardComponent from './CardComponentSubject';
import apiEndPoints from './ApiEndpoints';
import { Container } from 'react-bootstrap';

const Dashboard = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState("course");
  
    const getUsers = async () => {
      const data = await apiEndPoints.getTutorData()
      setUsers(preVal => data.data)
      console.log(users.data)
    };
  
    const _setCategory = (value) => {
      setCategory(preVal => value)
    }
  
    useEffect(() => {
        getUsers()
    }, []);
  
      
    return (
        
        <>
        {console.log("first name = ",users.firstName,"second name = ",users.secondName," courses = ",users.Courses)}
        <SearchComponent getUsers={getUsers} category={ category } setCategory = { _setCategory }/>
        <Container><h1>My Courses</h1><hr/></Container>
        <Container style={{overflowX:'scroll'}}>
            
            
            <Container style={{display:'flex'}}>
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        </Container>
        </Container>
        <br/>
        <Container><h1>Recommended Courses</h1><hr/></Container>
        <Container style={{overflowX:'scroll'}}>
            
            
            <Container style={{display:'flex'}}>
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        </Container>
        </Container>
        
        <br/>
        <Container><h1>Recently added Courses</h1><hr/></Container>
        <Container style={{overflowX:'scroll'}}>
            
            
            <Container style={{display:'flex'}}>
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        <CardComponent name={`${users.firstName} ${users.secondName}`} courses={users.Courses} />
        </Container>
        </Container>
        
        </>
    );
};

export default Dashboard;