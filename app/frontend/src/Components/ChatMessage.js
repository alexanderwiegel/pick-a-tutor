import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

function ChatMessage(message) {
  const userId = jwt_decode(localStorage.getItem("token")).id
  const own = message.id === userId
  return (
    <Row>
      <Col xs={{ order: message.order, span: 8, offset: own ? 4 : 0 }}>
        <Card bg={own ? "success" : "secondary"} text="white">
          <Card.Body>
            <Card.Title className="d-sm-flex .d-md-inline-flex justify-content-between">
              <Link to="" style={{ fontWeight: "bold", textDecoration: "none", color: "#ffffff" }}>{own ? "You" : message.sender}</Link>
              <p>{message.date}</p>
            </Card.Title>
            <Card.Text>{message.text}</Card.Text>
          </Card.Body>
        </Card>
        <br></br>
      </Col>
    </Row >
  )
}

export default ChatMessage;