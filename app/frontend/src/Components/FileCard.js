import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ButtonGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import apiEndPoints from './ApiEndpoints';

function FileCard({ user, file }) {
  // TODO: update parent state to show updated data
  const updateFile = async (status) => {
    file.tutorId == null ?
      await apiEndPoints.updateProfileFile(file.id, file.userId, status) :
      await apiEndPoints.updateCourseFile(file.id, status)
  }

  return (
    <>
      <Card style={{ width: '20rem' }}>
        <Card.Header><Link to="">{user.firstName + " " + user.lastName}</Link></Card.Header>
        <Card.Body>
          <Form>
            <Card.Text>
              {file.fileTitle}
            </Card.Text>
            <ButtonGroup className="d-flex">
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

export default FileCard;