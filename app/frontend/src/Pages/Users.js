import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import apiEndPoints from '../Components/ApiEndpoints';
import UserCard from '../Components/UserCard';

const Users = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const data = await apiEndPoints.getAllUsers()
    setUsers(() => data.data.data)
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='App'>
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