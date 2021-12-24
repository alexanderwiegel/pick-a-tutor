import React, { useEffect, useState } from "react";
import apiEndPoints from "./ApiEndpoints";
import { useLocation } from "react-router-dom";
import CardComponent from "./CardComponentSubject";
import CardComponentTutor from "./CardComponentTutor";
import SearchComponent from "./SearchComponent";
import {Container} from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

function Details(props) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("course")
  const location = useLocation();

  const getUsers = async (subject = "") => {
    const data = await apiEndPoints.getListofTutors(subject)
    console.log('In detail ',data)
    setUsers(preVal => data.data)
  };

  const _setCategory = (value) => {
    setCategory(preVal => value)
  }

  useEffect(() => {
    setTimeout(() => {
      getUsers(location.state?.search);
      setTimeout(() => {
        setLoading(preVal => false)
      }, 200)
    }, 500)
  }, []);

  return (
    
    <>
    <SearchComponent getUsers={getUsers} category={ category } setCategory = { _setCategory }/>
    <br/>
    <label for="filter"><i class="bi bi-funnel-fill"></i></label>
    <input type="checkbox" id="filter" name="filter" />
    <Container>
    <div className="detail-page">
      <div className="side-bar">
        <label for="filter"><i class="bi bi-x-lg"></i></label>
        <h1>Filters</h1>
        <h2>Rating Filters</h2>
      </div>
      <div className="main-content">
        <div className="wrapper" style={{justifyContent:'space-evenly'}}>
          {
            loading &&
              <h1>Fetching data...</h1>
          }
          
          { (users.length > 0 && !loading) && 
              users.map(user => {
                
                if(category === "course")
                  return <CardComponent courses={ user.Courses } 
                                    name={ user.firstName } 
                                    searched_name={location.state?.search} />
                return <CardComponentTutor courses={ user } 
                                    name={ user.firstName } 
                                    searched_name={location.state?.search} />
                }
              )
          }
          {
            (users.length === 0 && !loading) &&
              <h1>No data found</h1>       
          }
        </div>
      </div>
    </div>
    </Container>
    </>
  );
}

export default Details;
