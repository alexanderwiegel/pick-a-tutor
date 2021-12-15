import React, { useEffect, useState } from "react";
import apiEndPoints from "./ApiEndpoints";
import { useLocation } from "react-router-dom";
import Card from "./Card";

function Details(props) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const location = useLocation();

  const getUsers = async (subject) => {
    const data = await apiEndPoints.getListofTutors(subject)
    setUsers(preVal => data.data)
  };

  useEffect(() => {
    setTimeout(() => {
      getUsers(location.state?.search);
      setTimeout(() => {
        setLoading(preVal => false)
      }, 200)
    }, 500)
  }, []);

  return (
    <div className="wrapper">
      {
        loading &&
          <h1>Fetching data...</h1>
      }
      { (users.length > 0 && !loading) && 
          users.map(user => <Card courses={ user.Courses } name={ user.firstName } />)
      }
      {
        (users.length === 0 && !loading) &&
          <h1>No data found</h1>       
      }
    </div>
  );
}

export default Details;
