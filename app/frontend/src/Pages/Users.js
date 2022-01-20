import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import apiEndPoints from '../Components/ApiEndpoints';
import UserCard from '../Components/UserCard';

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    const data = await apiEndPoints.getAllUsers()
    setUsers(() => data.data.data)
  };

  useEffect(() => {
    setTimeout(() => {
      getUsers();
      setTimeout(() => {
        setLoading(() => false)
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
                return <UserCard user={user} key={user.id}></UserCard>
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