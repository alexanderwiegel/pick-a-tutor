import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function FileCard({ files }) {
  return (
    <>
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          {files.map((file) => (
            <Card.Text>
              {file.name}
            </Card.Text>
          ))}
          <Button>Contact</Button>
          <Button variant="success">Approve</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default FileCard;