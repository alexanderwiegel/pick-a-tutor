import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import ChatMessage from "../Components/ChatMessage";
import { format } from "date-fns";
import apiEndPoints from '../Components/ApiEndpoints';
import { BiArrowBack, BiPaperPlane } from "react-icons/bi";
import { Link } from "react-router-dom";

const URL = 'ws://127.0.0.1:8080';

const Chat = () => {
  // const [history, setHistory] = useState([])
  // const [loading, setLoading] = useState(true)

  // const getHistory = async () => {
  //   const data = await apiEndPoints.getHistory("3", "4")
  //   console.log(data)
  //   setHistory(() => data.data.data)
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getHistory();
  //     setTimeout(() => {
  //       setLoading(() => false)
  //     }, 200)
  //   }, 500)
  // }, []);

  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(new WebSocket(URL));

  const submitMessage = (dT, txt) => {
    const message = { sender: "You", dateTime: dT, text: txt };
    ws.send(JSON.stringify(message));
    setMessages([message, ...messages]);
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

  // var history = [
  //   { sender: "John Doe", date: "2022-01-01 12:00", text: "Hey, can I ask you something?" },
  //   { sender: "John Doe", date: "2022-01-01 14:00", text: "Do I need any prior knowledge for your Java course?" },
  //   { sender: "You", date: "2022-01-01 13:00", text: "Sure, go ahead!" },
  //   { sender: "You", date: "2022-01-01 15:00", text: "That's a very good question! No you don't, although it would help if you have ever typed something on a keyboard ;-)" },
  // ]

  // for (var i = 0; i < history.length; i++) {
  //   history[i].date = new Date(history[i].date)
  // }

  // history.sort(function compare(a, b) {
  //   var dateA = new Date(a.date)
  //   var dateB = new Date(b.date)
  //   return dateA - dateB
  // })

  // for (i = 0; i < history.length; i++) {
  //   // TODO: convert to 24h format
  //   history[i].date = format(new Date(history[i].date), "dd.MM.yyyy hh:mm")
  // }

  return (
    <div className="App">
      <Container style={{ left: 0, right: 0 }}>
        <Card>
          <Card.Header as="h2" className="d-flex align-items-center">
            <Button href="/messages"><BiArrowBack /></Button>
            <Container className="d-flex justify-content-between align-items-center">
              <Link to="" style={{ textDecoration: "none", color: "#0f0f0f" }}>John Doe</Link>
              <div>Tutor</div>
            </Container>
          </Card.Header>
          <Card.Body>
            {/* {history.map((message, index) =>
              <ChatMessage sender={message.sender} date={message.date} text={message.text} key={index} />
            )} */}
            {messages.reverse().map((message, index) =>
              <ChatMessage sender={message.sender} date={message.dateTime} text={message.text} key={index} />
            )}
          </Card.Body>
          <Card.Footer>
            <Form onSubmit={e => {
              e.preventDefault();
              submitMessage(format(Date.now(), "dd.MM.yyyy hh:mm"), message);
              setMessage([]);
            }}>
              <Row>
                <Col xs="10" lg="11">
                  <Form.Control as="textarea" value={message} onChange={e => setMessage(e.target.value)} placeholder="Write something..." required />
                </Col>
                <Col xs="2" lg="1" className="d-grid"><Button className="fw-bold" type="submit">Send<BiPaperPlane size="2em" /></Button></Col>
              </Row>
              {/* <Row>
              <Form.Control as="textarea" placeholder="Write something..." />
              <Button><BiPaperPlane /></Button>
            </Row> */}
            </Form>
          </Card.Footer>
        </Card >
      </Container >
    </div >
  );
};

export default Chat;