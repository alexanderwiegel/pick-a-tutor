import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { ButtonGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import apiEndPoints from "./ApiEndpoints"

function UserCard({ user, onUserBlock }) {
  const blockUser = async () => {
    await apiEndPoints.blockUser(user.email).then(function () { onUserBlock() })
  }

  return (
    <>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          {/* <Card.Img src={user.profilePic} /> */}
          <Card.Title>
            {
              user.isTutor ?
                // TODO: ask others if it should obviously be a link or not
                <Link to={"/tutor/" + user.id} style={{ textDecoration: "none", color: "#0f0f0f" }}>{user.firstName} {user.lastName}</Link> :
                user.firstName + " " + user.lastName
            }
          </Card.Title>
          <Card.Subtitle>{user.isAdmin ? "Admin" : user.isTutor ? "Tutor" : "Student"}</Card.Subtitle>
          <ButtonGroup className="d-flex">
            <Link to="/chat" state={{ contact: user }} ><Button>Contact</Button></Link>
            <Button onClick={() => blockUser()} variant="danger">Block</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      <br />
    </>
  )
}

export default UserCard