import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          {/* <Card.Img src={user.profilePic} /> */}
          <Card.Title><Link to="">{user.firstName} {user.lastName}</Link></Card.Title>
          {/* TODO: base subtitle on role (e.g. with user.isStudent) */}
          <Card.Subtitle>Tutor</Card.Subtitle>
          <ButtonGroup className="d-flex">
            <Button>Contact</Button>
            <Button variant="danger">Block</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      <br />
    </>
  )
}

export default UserCard;