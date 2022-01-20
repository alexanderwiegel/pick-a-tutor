import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ButtonGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FileCard({ user, file }) {
  return (
    <>
      <Card style={{ width: '20rem' }}>
        <Card.Header><Link to="">{user.firstName + " " + user.lastName}</Link></Card.Header>
        <Card.Body>
          <Form>
            {/* TODO: un-comment this when API endpoint getFilesToApprove is available */}
            {/* {files.map((file) => ( */}
            {/* <Form.Check type="checkbox" label="Example.java"> */}
            {/* // label={file.name} */}
            <Card.Text>
              {file}
            </Card.Text>
            {/* </Form.Check> */}
            {/* ))} */}
            {/* <Card.Text>ExampleCode.java</Card.Text>
          <Card.Text>ExampleSlides.pdf</Card.Text> */}
            <ButtonGroup className="d-flex">
              <Button variant="danger">Reject</Button>
              <Link to={{ pathname: "/chat", state: { contact: user.id } }}>
                <Button>Contact</Button>
              </Link>
              <Button variant="success">Approve</Button>
            </ButtonGroup>
          </Form>
        </Card.Body>
      </Card>
      <br />
    </>
  )
}

export default FileCard;