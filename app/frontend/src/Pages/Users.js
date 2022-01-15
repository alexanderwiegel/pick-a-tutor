import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import apiEndPoints from '../Components/ApiEndpoints';
import UserCard from '../Components/UserCard';

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const location = useLocation();

  const getUsers = async (subject = "") => {
    // TODO: replace with getListOfUsers()
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
        <Container>
          <Row>
            <Col />
            <Col>
              {/* TODO: add SearchBar without option to choose a category */}
              {/* <SearchBar /> */}
              {users.length > 0 && users.map(user => {
                return <><UserCard user={user}></UserCard><br></br></>
              })}
            </Col>
            <Col />
          </Row>
        </Container>
      }
    </div >
  )
};

export default Users;