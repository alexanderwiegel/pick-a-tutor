import React from "react"
import { Badge, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import jwt_decode from "jwt-decode"
import { format } from "date-fns"

function Message(lastMessage) {
  const lm = lastMessage.lastMessage
  const userId = jwt_decode(localStorage.getItem("token")).id
  const contact = lm.senderId === userId ? lm.recipient : lm.sender

  return (
    <Link to={"/chat"} state={{ contact: contact }} style={{ textDecoration: "none" }}>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{contact?.firstName + " " + contact?.lastName}</div>
          {lm.message}
        </div>
        <Badge pill>
          {format(new Date(lm.createdAt), "dd.MM.yyyy kk:mm")}
        </Badge>
      </ListGroup.Item>
    </Link >
  )
}

export default Message