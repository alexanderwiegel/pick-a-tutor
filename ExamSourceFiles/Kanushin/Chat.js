import React, { useState, useEffect } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import ChatMessage from "../Components/ChatMessage"
import { format } from "date-fns"
import jwt_decode from "jwt-decode"
import apiEndPoints from "../Components/ApiEndpoints"
import { BiArrowBack, BiPaperPlane } from "react-icons/bi"
import { Link, useLocation } from "react-router-dom"

const URL = "ws://20.113.25.17:8080"

const Chat = () => {
  //#region constants and database messaging
  const token = jwt_decode(localStorage.getItem("token"))
  const userId = token.id
  const [conversation, setConversation] = useState([])
  const location = useLocation()
  const contact = location.state?.contact

  const getConversation = async (senderId, recipientId) => {
    const data = await apiEndPoints.getHistory(recipientId, senderId)
    setConversation(data.data.data)
  }

  // Note: this function marks ALL messages that were RECEIVED from the contact as read ON EVERY PAGE REFRESH
  // this is definitely bad practice, but for now this is the only way I can think of
  const markAsRead = async () => {
    for (var i = 0; i < conversation.length; i++) {
      if (conversation[i].recipientId === userId)
        await apiEndPoints.markAsRead(conversation[i].id)
    }
  }

  const sendMessage = async (senderId, recipientId, txt) => {
    await apiEndPoints.sendMessage(senderId, recipientId, txt)
  }

  useEffect(() => {
    getConversation(userId, contact.id)
  }, [userId, contact.id])

  useEffect(() => {
    markAsRead()
  })
  //#endregion

  //#region Sort messages by date
  for (var i = 0; i < conversation.length; i++) {
    conversation[i].createdAt = new Date(conversation[i].createdAt)
  }

  conversation.sort(function compare(a, b) {
    var dateA = new Date(a.createdAt)
    var dateB = new Date(b.createdAt)
    return dateA - dateB
  })

  //#endregion

  //#region WebSocket messaging
  const [message, setMessage] = useState([])
  const [messages, setMessages] = useState([])
  const [ws, setWs] = useState(new WebSocket(URL, "echo-protocol"))

  const submitMessage = (dT, txt) => {
    const message = { senderId: userId, dateTime: dT, text: txt }
    ws.send(JSON.stringify(message))
    setMessages([...messages, message])
  }

  useEffect(() => {
    ws.onmessage = (e) => {
      let reader = new FileReader();
      reader.onload = () => {
        let message = JSON.parse(reader.result)
        setMessages([...messages, message])
      }
      reader.readAsText(e.data);
    }

    return () => {
      ws.onclose = () => {
        setWs(new WebSocket(URL, "echo-protocol"))
      }
    }
  }, [ws.onmessage, ws.onopen, ws.onclose, messages])
  //#endregion

  return (
    <div className="App">
      <Container style={{ left: 0, right: 0 }}>
        <Card>
          <Card.Header as="h2" className="d-flex align-items-center">
            <Button href="/messages"><BiArrowBack /></Button>
            <Container className="d-flex justify-content-between align-items-center">
              {
                contact.isTutor ?
                  // TODO: ask others if it should obviously be a link or not
                  <Link to={"/tutor/" + contact.id} style={{ textDecoration: "none", color: "#0f0f0f" }}>{contact.firstName + " " + contact.lastName}</Link> :
                  contact.firstName + " " + contact.lastName
              }
              <div>{contact.isAdmin ? "Admin" : contact.isTutor ? "Tutor" : "Student"}</div>
            </Container>
          </Card.Header>
          <Card.Body>
            {conversation.map(message =>
              <ChatMessage
                senderName={message.sender.firstName + " " + message.sender.lastName}
                senderId={message.sender.id}
                date={format(new Date(message.createdAt), "dd.MM.yyyy kk:mm")}
                text={message.message}
                key={message.id} />
            )}
            {messages.map((message, index) =>
              <ChatMessage senderId={message.senderId} date={message.dateTime} text={message.text} key={index} />
            )}
          </Card.Body>
          <Card.Footer>
            <Form
              onSubmit={e => {

                e.preventDefault()
                submitMessage(format(Date.now(), "dd.MM.yyyy kk:mm"), message)
                setMessage([])
                sendMessage(userId, contact.id, message)
              }}
            >
              <Row>
                <Col xs="10" lg="11">
                  <Form.Control as="textarea"
                    value={message} onChange={e => setMessage(e.target.value)}
                    placeholder="Write something..." required />
                </Col>
                <Col xs="2" lg="1" className="d-grid"><Button className="fw-bold chat-send" type="submit">Send<BiPaperPlane size="2em" /></Button></Col>
              </Row>
            </Form>
          </Card.Footer>
        </Card >
      </Container >
    </div >
  )
}

export default Chat