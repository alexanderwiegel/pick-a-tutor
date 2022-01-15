import React from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Message(contactName, dateOfLastContact, lastMessage) {
  return (
    <Link to={{ pathname: "/chat", state: { contactName: contactName } }} style={{ textDecoration: "none" }}>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{contactName.contactName}</div>
          {contactName.lastMessage}
        </div>
        <Badge pill>
          {contactName.dateOfLastContact}
        </Badge>
      </ListGroup.Item>
    </Link>
  )
}

export default Message;