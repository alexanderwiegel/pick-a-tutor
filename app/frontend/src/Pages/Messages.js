import React, { useState, useEffect } from "react"
import { Container, ListGroup } from "react-bootstrap"
import jwt_decode from "jwt-decode"
import Message from "../Components/Message"
import apiEndPoints from "../Components/ApiEndpoints"

const Messages = () => {
  const userId = jwt_decode(localStorage.getItem("token")).id
  const [conversations, setConversations] = useState([])

  const getConversations = async () => {
    const data = await apiEndPoints.getAllConversations(userId)
    setConversations(() => data.data.data)
  }

  useEffect(() => {
    getConversations()
  }, [])

  return (
    <div className="App">
      <Container>
        <ListGroup>
          {conversations.reverse().map(message =>
            <Message lastMessage={message[0]} key={message[0].id} />
          )}
        </ListGroup>
      </Container>
    </div>
  )
}

export default Messages