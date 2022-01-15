import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function ChatMessage(message) {
  const own = message.sender === "You";
  return (
    <Row>
      <Col xs={{ order: message.order, span: 8, offset: own ? 4 : 0 }}>
        <Card bg={own ? "success" : "secondary"} text="white">
          <Card.Body>
            <Card.Title style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to="" style={{ fontWeight: "bold", textDecoration: "none", color: "#ffffff" }}>{message.sender}</Link>
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