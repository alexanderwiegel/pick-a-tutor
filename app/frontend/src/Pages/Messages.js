import React, { useState, useEffect } from "react";
import { Container, ListGroup } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import { format } from "date-fns";
import Message from '../Components/Message';
import apiEndPoints from '../Components/ApiEndpoints';

const Messages = () => {
  const userId = jwt_decode(localStorage.getItem("token")).id
  const [conversations, setConversations] = useState([])

  const getConversations = async () => {
    const data = await apiEndPoints.getAllConversations(userId)
    setConversations(data.data.data)
  };

  useEffect(() => {
    getConversations();
  }, []);

  return (
    <div className='App'>
      <Container>
        <ListGroup>
          {conversations.map(message =>
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