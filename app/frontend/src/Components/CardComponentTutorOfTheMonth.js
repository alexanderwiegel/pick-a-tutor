import React, { useState, useEffect } from 'react';
import { Card, Button, Badge } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import apiEndPoints from './ApiEndpoints';

function CardComponentTutorOfTheMonth(props) {
  const [tutorImage, setTutorImage] = useState("")
  const [bestTutor, setBestTutor] = useState();
  const getTOTMdata = async () => {
    const data = await apiEndPoints.getTutorOfTheMonth()
    data.data.records > 0 &&
      setBestTutor(() => data.data.data[0]);
  };
  useEffect(async () => {
    getTOTMdata();
    const image = await apiEndPoints.getTutorImage(bestTutor?.tutorId)
    setTutorImage(preVal => image?.filePath)
  }, []);
  return (
    bestTutor != undefined &&
    < Card
      style={{
        fontSize: "1rem",
        borderColor: "gold",
        borderWidth: "2px"
      }
      }
    >
      <Badge bg="warning" text="danger" >TUTOR OF THE MONTH</Badge>
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
            fontSize: "1rem",
          }}
        >
          <p>{bestTutor?.firstName}</p>

          <hr />

          <p style={{ paddingLeft: "4px" }}>
            {bestTutor?.rating_avg}
            <i className="bi bi-star-fill" style={{ color: "gold" }} />
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
          {bestTutor?.courseName}
        </Card.Text>
        <Card.Text style={{ fontSize: "0.7rem", marginTop: "-10px" }}>
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button
            style={{ backgroundColor: "#00b7ff", width: "100%", borderColor: "#00b7ff" }}
          >
            <Link to={`/tutor/${bestTutor.tutorId}`} state={{ id: bestTutor.tutorId }} style={{ color: '#ffffff' }}>
              Meet {bestTutor.firstName + " " + bestTutor.lastName}
            </Link>
          </Button>
        </div>
      </Card.Body>
    </Card >
  );
}

export default CardComponentTutorOfTheMonth;