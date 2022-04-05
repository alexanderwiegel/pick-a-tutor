import React, { useState, useEffect } from "react"
import { Card, Button, Container } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link } from "react-router-dom"
import apiEndPoints from "./ApiEndpoints"

function CardComponent({ name, course }) {
  const [courseImage, setCourseImage] = useState("")
  const [isRequest, setIsRequested] = useState(false)

  const requestEnrollment = async () => {
    const response = await apiEndPoints.requestEnrollment(course.CourseId)
    if (response.data.success) {
      setIsRequested(() => true)
      alert("Your request for enrollment has been put to the tutor!")
    }
  }

  useEffect(async () => {
    const image = await apiEndPoints.getCourseImage(course.UserId, course.CourseId)
    setCourseImage(() => image?.filePath)
  }, [])

  return (
    <Card
      style={{ fontSize: "1rem", borderColor: "transparent", minWidth: "270px" }}>
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: "20px" }}
      >
        <Card.Img
          variant="top"
          src={courseImage ? `http://20.113.25.17:3001/api/downloadprofilefile?path=${courseImage}` : require("../images/course1.jpg")}
          style={{
            height: "150px",
            width: "150px",
            borderRadius: "5px",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.8rem",
          }}
        >
          {course.Course?.name}
          <hr />
          <p style={{ marginLeft: "2px", paddingLeft: "4px", minWidth: "33.33%" }}>
            {(course.coursePricePerHour === null) ? 0 : course.coursePricePerHour}€/h
          </p>
          <p style={{ paddingLeft: "4px", marginBottom: "0px", minWidth: '33.33%' }}>
            {course.rating}
            <i className="bi bi-star-fill" style={{ color: "gold" }} />
            ({course.nRatings})
          </p>
        </Card.Title>
        <Container style={{
          fontSize: "0.8rem",
          color: "#6a6f73",
          display: "flex",
          justifyContent: "space-between",
          padding: 0
        }}>
          <Card.Text style={{ fontSize: '0.7rem' }}>
            <Link to={`/tutor/${course.UserId}`} style={{ color: 'black' }}>
              by {name} <i className="bi bi-person-lines-fill" />
            </Link>
          </Card.Text>
          {localStorage.getItem("user") &&
            <div style={{ display: "flex", flexDirection: "column", fontSize: '0.7rem' }}>
              <Card.Link style={{ cursor: 'pointer' }} onClick={requestEnrollment}>Request</Card.Link>
              <Link to={"/chat"} state={{ contact: course.User }} >Contact</Link>
            </div>}
        </Container>
        <Card.Text style={{ fontSize: "0.7rem" }}>
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button
            style={{ backgroundColor: "#00b7ff", width: "100%", borderColor: "#00b7ff" }}>
            <Link to={`/course/${course.CourseId}`} style={{ color: '#ffffff', display: 'block' }}>
              <i class="bi bi-info-circle"></i> Course details
            </Link>
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
