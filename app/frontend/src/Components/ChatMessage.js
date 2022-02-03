import React, { useEffect, useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import jwt_decode from "jwt-decode"
import apiEndPoints from "./ApiEndpoints"

function ChatMessage({ senderName, senderId, date, text }) {
  const userId = jwt_decode(localStorage.getItem("token")).id
  const own = senderId === userId
  const [name, setName] = useState(senderName)

  const getUserName = async () => {
    const data = await apiEndPoints.getUserById(senderId)
    const user = data.data.data[0]
    setName(() => user.firstName + " " + user.lastName)
  }

  useEffect(() => {
    if (senderName == undefined)
      getUserName()
  })

  return (
    <Row>
      <Col xs={{ span: 8, offset: own ? 4 : 0 }}>
        <Card bg={own ? "success" : "secondary"} text="white">
          <Card.Body>
            <Card.Title className="d-sm-flex .d-md-inline-flex justify-content-between">
              <Link to="" style={{ fontWeight: "bold", textDecoration: "none", color: "#ffffff" }}>
                {own ? "You" : name}
              </Link>
              <p>{date}</p>
            </Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
        <br></br>
      </Col>
    </Row >
  )
}

export default ChatMessage