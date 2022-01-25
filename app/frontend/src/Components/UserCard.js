import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import apiEndPoints from './ApiEndpoints';

function UserCard({ user }) {
  const blockUser = async () => {
    await apiEndPoints.blockUser(user.email)
  }

  return (
    <>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          {/* <Card.Img src={user.profilePic} /> */}
          {/* TODO: forward to TutorProfile if tutor */}
          <Card.Title><Link to="">{user.firstName} {user.lastName}</Link></Card.Title>
          <Card.Subtitle>{user.isAdmin ? "Admin" : user.isStudent ? "Student" : "Tutor"}</Card.Subtitle>
          <ButtonGroup className="d-flex">
            <Link to={"/chat"} state={{ contact: user }} ><Button>Contact</Button></Link>
            <Button onClick={() => blockUser()} variant="danger">Block</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      <br />
    </>
  )
}

export default UserCard;