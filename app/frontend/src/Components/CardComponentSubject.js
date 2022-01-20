import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import apiEndPoints from "./ApiEndpoints";

function CardComponent({ name, course }) {
  const requestEnrollment = async () => {
    const response = await apiEndPoints.requestEnrollment(course.CourseId)
  }
  return (
    <Card
      style={{
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
          src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
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
          {/* {searched_name.trim().length > 0 ? (
            <p>{searched_name.toUpperCase()}</p>
          ) : (
            courses &&
            courses.map((course) => (
              <p
                style={{
                  paddingLeft: "2px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                {course.Course.name}{" "}
              </p>
            ))
          )} */}
          {course.Course.name}
          <hr />
          <p style={{ marginLeft: "2px", paddingLeft: "4px", }}>
            {course.coursePricePerHour}€/h
          </p>
          <p style={{ paddingLeft: "4px", marginBottom: '0px' }}>
            4.5
            <i class="bi bi-star-fill" style={{ color: "gold" }} />
            {/* <p style={{ color: "#6a6f73", fontSize: "0.7rem", marginBottom: '0px' }}>
              (15.235)
            </p> */}
          </p>
        </Card.Title>
        <Container style={{
          fontSize: "0.8rem",
          color: "#6a6f73",
          display: 'flex',
          justifyContent: "space-between",
          padding: 0
        }}>
          <Card.Text>
            meet {name} <i class="bi bi-person-lines-fill" />
          </Card.Text>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Card.Link href="#" style={{ textDecoration: 'none', color: "#6a6f73", }} onClick={requestEnrollment}>Request</Card.Link>
            <Card.Link href="#" style={{ textDecoration: 'none', color: "#6a6f73", marginLeft: 0 }}>Contact</Card.Link>
          </div>
        </Container>
        <Card.Text style={{ fontSize: "0.7rem" }}>
          {/* {courses &&
                        courses.length > 0 &&
                        courses.map((course) =>
                            course.name.toLowerCase() ===
                            searched_name.toLowerCase() ? (
                                <p>{course.description}</p>
                            ) : (
                                ""
                            )
                        )} */}
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button
            style={{
              backgroundColor: "#00b7ff",
              width: "100%",
              borderColor: "#00b7ff",
            }}
          >
            Course details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
