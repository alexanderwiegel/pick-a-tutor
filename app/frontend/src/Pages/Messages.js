import React, { useState, useEffect } from "react";
import { Container, ListGroup, Spinner } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import { format } from "date-fns";
import Message from '../Components/Message';
import apiEndPoints from '../Components/ApiEndpoints';

const Messages = () => {
  const userId = jwt_decode(localStorage.getItem("token")).id
  const [conversations, setConversations] = useState([])
  const [loading, setLoading] = useState(true)

  const getConversations = async () => {
    const data = await apiEndPoints.getAllConversations(userId)
    setConversations(data.data.data)
  };

  useEffect(() => {
    setTimeout(() => {
      getConversations();
      setTimeout(() => {
        setLoading(() => false)
      }, 200)
    }, 500)
  }, []);

  return (
    <div className='App'>
      <Container>
        <ListGroup>
          {loading ? <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
            : conversations.map(message =>
              <Message
                name={message[0].sender}
                dateOfLastContact={format(new Date(message[0].createdAt), "dd.MM.yyyy hh:mm")}
                lastMessage={message[0].message}
                key={message[0].id}
              />
            )}
        </ListGroup>
      </Container>
    </div>
  );
};

export default Messages;