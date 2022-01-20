import React from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Message(contact) {
  return (
    <Link to={"/chat"} state={{ contact: contact.name }} style={{ textDecoration: "none" }}>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{contact.name.firstName + " " + contact.name.lastName}</div>
          {contact.lastMessage}
        </div>
        <Badge pill>
          {contact.dateOfLastContact}
        </Badge>
      </ListGroup.Item>
    </Link >
  )
}

export default Message;