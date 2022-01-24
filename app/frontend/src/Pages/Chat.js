import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import ChatMessage from "../Components/ChatMessage";
import { format } from "date-fns";
import jwt_decode from 'jwt-decode';
import apiEndPoints from '../Components/ApiEndpoints';
import { BiArrowBack, BiPaperPlane } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const URL = 'ws://127.0.0.1:8080';

const Chat = () => {
  const token = jwt_decode(localStorage.getItem("token"))
  const userId = token.id
  const userName = token.firstName + " " + token.lastName
  const [conversation, setConversation] = useState([])
  const location = useLocation()
  const contact = location.state?.contact

  useEffect(() => {
    getConversation(userId, contact.id);
  }, [userId, contact.id]);

  const getConversation = async (senderId, recipientId) => {
    const data = await apiEndPoints.getHistory(recipientId, senderId)
    setConversation(data.data.data)
  };

  //#region Sort messages by date

  for (var i = 0; i < conversation.length; i++) {
    conversation[i].createdAt = new Date(conversation[i].createdAt);
  }

  conversation.sort(function compare(a, b) {
    var dateA = new Date(a.createdAt)
    var dateB = new Date(b.createdAt)
    return dateA - dateB
  })

  //#endregion

  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(new WebSocket(URL));

  const submitMessage = (dT, txt) => {
    const message = { sender: userName, dateTime: dT, text: txt };
    ws.send(JSON.stringify(message));
    setMessages([message, ...messages]);
  }

  const sendMessage = async (senderId, recipientId, txt) => {
    await apiEndPoints.sendMessage(senderId, recipientId, txt)
  }

  useEffect(() => {
    ws.onopen = () => {
      console.log('WebSocket Connected');
    }

    ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      setMessages([message, ...messages]);
    }

    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected');
        setWs(new WebSocket(URL));
      }
    }
  }, [ws.onmessage, ws.onopen, ws.onclose, messages]);

  return (
    <div className="App">
      <Container style={{ left: 0, right: 0 }}>
        <Card>
          <Card.Header as="h2" className="d-flex align-items-center">
            <Button href="/messages"><BiArrowBack /></Button>
            <Container className="d-flex justify-content-between align-items-center">
              <Link to="" style={{ textDecoration: "none", color: "#0f0f0f" }}>{contact.firstName + " " + contact.lastName}</Link>
              <div>{contact.isAdmin ? "Admin" : contact.isStudent ? "Student" : "Tutor"}</div>
            </Container>
          </Card.Header>
          <Card.Body>
            {conversation.map(message =>
              <ChatMessage sender={message.sender.firstName + " " + message.sender.lastName} id={message.sender.id}
                date={format(new Date(message.createdAt), "dd.MM.yyyy hh:mm")}
                text={message.message} key={message.id} />
            )}
            {messages.reverse().map((message, index) =>
              <ChatMessage sender={message.sender} id={userId} date={message.dateTime} text={message.text} key={index} />
            )}
          </Card.Body>
          <Card.Footer>
            <Form
              onSubmit={e => {
                e.preventDefault();
                submitMessage(format(Date.now(), "dd.MM.yyyy hh:mm"), message);
                setMessage([]);
                sendMessage(userId, contact.id, message)
              }}
            >
              <Row>
                <Col xs="10" lg="11">
                  <Form.Control as="textarea"
                    value={message} onChange={e => setMessage(e.target.value)}
                    placeholder="Write something..." required />
                </Col>
                <Col xs="2" lg="1" className="d-grid"><Button className="fw-bold" type="submit">Send<BiPaperPlane size="2em" /></Button></Col>
              </Row>
            </Form>
          </Card.Footer>
        </Card >
      </Container >
    </div >
  );
};

export default Chat;