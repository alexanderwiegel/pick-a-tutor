import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FileCard from '../Components/FileCard';
import apiEndPoints from '../Components/ApiEndpoints';
import Spinner from 'react-bootstrap/Spinner'
import { Container } from "react-bootstrap";

const Approvals = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const location = useLocation();

  const getUsers = async (subject = "") => {
    // TODO: replace this with getFilesToApprove
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
    <div className='App'>
      {
        loading &&
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      }

      {
        users.length > 0 && users.map(user => {
          return <FileCard files={user.Courses}></FileCard>
        })
      }
    </div>
  )
};

export default Approvals;