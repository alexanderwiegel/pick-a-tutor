import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ButtonGroup, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FileCard({ name, files }) {
  return (
    <>
      <Card style={{ width: '20rem' }}>
        <Card.Header><Link to="">{name}</Link></Card.Header>
        <Card.Body>
          <Form>
            {/* TODO: un-comment this when API endpoint getFilesToApprove is available */}
            {files.map((file) => (
              <Form.Check type="checkbox" label={file.name}>
                {/* <Card.Text>
                  {file.name}
                </Card.Text> */}
              </Form.Check>
            ))}
            {/* <Card.Text>ExampleCode.java</Card.Text>
          <Card.Text>ExampleSlides.pdf</Card.Text> */}
            <ButtonGroup className="d-flex">
              <Button variant="danger">Reject</Button>
              <Button>Contact</Button>
              <Button variant="success">Approve</Button>
            </ButtonGroup>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default FileCard;