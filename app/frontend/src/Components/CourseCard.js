import React from "react"
import { Card, Button } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import CourseImage1 from "../images/course1.jpg"

function CourseCard({ course }) {
  return (
    <Card style={{ width: "20rem", fontSize: "1rem", borderColor: "transparent", minWidth: "270px" }}>
      <div className="d-flex justify-content-center" style={{ paddingTop: "20px" }}>
        {/* TODO: Add course image from backend */}
        <Card.Img variant="top" src={CourseImage1} style={{ borderRadius: "5px" }} />
      </div>
      <Card.Body>
        <Card.Title style={{ display: "flex", justifyContent: "space-between", fontSize: "1rem" }}>
          {course.name}
          <hr />
          <p style={{ marginLeft: "2px", paddingLeft: "4px" }}>
            {(course.coursePricePerHour === null)? 0 : course.coursePricePerHour} €/h
          </p>
          <div style={{ paddingLeft: "4px" }} defaultValue="0.0">
            {course.rating}
            <i className="bi bi-star-fill" style={{ color: "gold" }} />
            <p style={{ color: "#6a6f73", fontSize: "0.7rem" }} defaultValue="000">
              {/* To Do: Add real num of reviews from the backend */}
              (10)
            </p>
          </div>
        </Card.Title>
        <Card.Text style={{ fontSize: "0.8rem", color: "#6a6f73", marginTop: "-40px" }} />

        <Card.Text style={{ fontSize: "0.7rem", marginTop: "-10px" }}>
          {course.description}
        </Card.Text>

        <div className="d-flex justify-content-center">
          <Button
            variant="outline-primary"
            style={{ width: "100%" }}
            href={"/course/" + course.id}>
            Course details
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CourseCard
