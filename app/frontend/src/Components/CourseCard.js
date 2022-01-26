import React from "react"
import { Card, Button } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import CourseImage1 from "../images/course1.jpg"

function CourseCard({ tutorName, course }) {
  return (
    <Card
      style={{
        width: "20rem",
        fontSize: "1rem",
        borderColor: "transparent",
        minWidth: "270px",
      }}
    >
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: "20px" }}
      >
        <Card.Img
          variant="top"
          // To Do: Add course image from backend
          src={CourseImage1}
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
            fontSize: "1rem",
          }}
        >
          {course.name}

          <hr />
          <p style={{ marginLeft: "2px", paddingLeft: "4px" }}>
            {course.coursePricePerHour} €/h
          </p>
          <p style={{ paddingLeft: "4px" }} defaultValue="0.0">
            {course.rating}
            <i className="bi bi-star-fill" style={{ color: "gold" }} />
            <p style={{ color: "#6a6f73", fontSize: "0.7rem" }} defaultValue="000">
              {/* To Do: Add real num of reviews from the backend */}
              (10)
            </p>
          </p>
        </Card.Title>
        <Card.Text
          style={{
            fontSize: "0.8rem",
            color: "#6a6f73",
            marginTop: "-40px",
          }}
        >
          meet {tutorName} <i className="bi bi-person-lines-fill" />
        </Card.Text>
        <Card.Text style={{ fontSize: "0.7rem", marginTop: "-10px" }}>
          {course.description}
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button
            style={{
              backgroundColor: "#00b7ff",
              width: "100%",
              borderColor: "#00b7ff",
            }}
            href={"/course/" + course.id}
          >
            Course details
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CourseCard
