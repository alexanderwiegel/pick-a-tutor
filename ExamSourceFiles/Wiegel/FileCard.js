import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { ButtonGroup, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import apiEndPoints from "./ApiEndpoints"

function FileCard({ user, file, handleOnApproveOrReject }) {
  var pFile = file.tutorId == null

  const updateFile = async (status) => {
    pFile ?
      await apiEndPoints.updateProfileFile(file.id, file.userId, status)
        .then(function () { handleOnApproveOrReject() }) :
      await apiEndPoints.updateCourseFile(file.id, status).then(function () { handleOnApproveOrReject() })
  }

  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Header>
          {
            user?.isTutor ?
              // TODO: ask others if it should obviously be a link or not
              <Link
                to={"/tutor/" + user.id}
                style={{ textDecoration: "none", color: "#0f0f0f" }}>
                {user.firstName} {user.lastName}
              </Link> :
              user.firstName + " " + user.lastName
          }
          {pFile ? "'s profile" : " in course: " + file.Course.name}</Card.Header>
        <Card.Body>
          <Form>
            <Card.Text>
              <a
                href={"http://20.113.25.17:3001/api/downloadprofilefile?path=" + file.filePath}
                download={file.fileTitle}>
                {file.fileTitle}
              </a>
            </Card.Text>
            <ButtonGroup className='d-flex'>
              <Button onClick={() => updateFile("Rejected")} variant="danger">Reject</Button>
              <Link to={"/chat"} state={{ contact: user }} ><Button>Contact</Button></Link>
              <Button onClick={() => updateFile("Approved")} variant="success">Approve</Button>
            </ButtonGroup>
          </Form>
        </Card.Body>
      </Card>
      <br />
    </>
  )
}

export default FileCard