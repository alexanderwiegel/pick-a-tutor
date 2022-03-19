import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import apiEndPoints from "./ApiEndpoints";

function CardComponentTutor({ name, tutor }) {
  const [tutorImage, setTutorImage] = useState("")
  useEffect(async () => {
    const image = await apiEndPoints.getTutorImage(tutor.id)
    setTutorImage(preVal => image?.filePath)
  }, [])
  return (
    <Card
      style={{
        fontSize: "1rem",
        borderColor: "transparent",
      }}
    >
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: "20px" }}
      >
        <Card.Img
          variant="top"
          src={tutorImage ? `http://20.113.25.17:3001/api/downloadprofilefile?path=${tutorImage}` : require("../images/tutor1.jpg")}
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
          <p>{tutor.firstName}</p>

          <hr />

          <p style={{ paddingLeft: "4px" }}>
            {tutor.rating}
            <i className="bi bi-star-fill" style={{ color: "gold" }} />
            ({tutor.nRatings})
          </p>
        </Card.Title>
        <br />
        <Card.Text
          style={{
            fontSize: "0.8rem",
            color: "#6a6f73",
            marginTop: "-40px",
            display: "flex"
          }}
        >
          {
            tutor?.Courses.map(course => <p style={{ fontSize: '0.7rem' }} key={course.id}>{course.name}</p>)
          }
        </Card.Text>
        <Card.Text style={{ fontSize: "0.7rem", marginTop: "-10px" }}>
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button
            style={{ backgroundColor: "#00b7ff", width: "100%", borderColor: "#00b7ff" }}
          >
            <Link to={`/tutor/${tutor.id}`} state={{ id: tutor.id }} style={{ color: '#ffffff' }}>
              Meet {name}
            </Link>
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardComponentTutor
