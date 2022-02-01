import React from 'react';
import { Card, Button, Container } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link } from "react-router-dom"

const CardComponentMyCourses = (course) => {
  return (
    <Card
      style={{ fontSize: "1rem", borderColor: "transparent", minWidth: "270px" }}>
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: "20px" }}
      >
        <Card.Img
          variant="top"
          src={require("../images/tutor1.jpg")}
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
          {course.course.Course.name}
          <hr />
          <p style={{ marginLeft: "2px", paddingLeft: "4px", }}>
            {course.course.TutorCourse.coursePricePerHour} €/h
          </p>
          <p style={{ paddingLeft: "4px", marginBottom: "0px" }}>
            {course.course.TutorCourse.rating}
            <i className="bi bi-star-fill" style={{ color: "gold" }} />
          </p>
        </Card.Title>
        <Container style={{
          fontSize: "0.8rem",
          color: "#6a6f73",
          display: "flex",
          justifyContent: "space-between",
          padding: 0
        }}>
          <Card.Text>
            {/* TODO: Add the routing to the right page, find userID */}
            <Link to={`/tutor/${course.course.User.id}`} style={{ color: 'black' }}>
              by {course.course.User.firstName + " " + course.course.User.lastName} <i className="bi bi-person-lines-fill" />
            </Link>
          </Card.Text>
          {localStorage.getItem("user") &&
            <div style={{ display: "flex", flexDirection: "column" }}>
              {console.log("user id= ", course)}
              <Card.Link style={{ color: "#6a6f73", marginLeft: 0 }}><Link to={"/chat"} state={{ contact: course.course.User }} >Contact</Link></Card.Link>
            </div>}
        </Container>
        <Card.Text style={{ fontSize: "0.7rem" }}>
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button
            style={{ backgroundColor: "#00b7ff", width: "100%", borderColor: "#00b7ff" }}>
            <Link to={`/course/${course.course.Course?.id}`} style={{ color: '#ffffff', display: 'block' }}>
              Course details
            </Link>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponentMyCourses;