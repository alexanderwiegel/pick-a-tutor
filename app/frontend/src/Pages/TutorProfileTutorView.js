import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CourseCard from "../Components/CourseCard";
import { useParams } from "react-router-dom";
import apiEndPoints from "../Components/ApiEndpoints";
import tutorImage1 from "../images/tutor1.jpg";

function TutorProfileTutorView(props) {
  const [tutorProfile, setTutorProfile] = useState(null);
  const { id } = useParams();

  const getTutorProfile = async (tutorID) => {
    const tutorProfile = await apiEndPoints.getTutorProfile(tutorID);
    console.log("load tutor profile");
    console.log(tutorProfile);
    setTutorProfile(tutorProfile);
  };

  useEffect(() => {
    console.log("loading tutor profile effect ran");
    getTutorProfile(id);
  }, []);

  return (
    tutorProfile && (
      <Container>
        <Row style={{ marginTop: " 1rem" }}>
          <Col md={5}>
            <Image
              // To Do: Switch to dynamically loaded images from the backend
              src={tutorImage1}
              fluid={true}
              thumbnail={true}
              className="floatRight"
              alt="tutor image"
              style={{ height: "400px", width: "600px" }}
            />
          </Col>
          <Col md={7} className="flexColumn">
            <h3>{tutorProfile.firstName + " " + tutorProfile.lastName}</h3>
            <h6>
              {/* To Do: add real value of the rating and num of reviews after receiving it from the backend */}
              {4.5}{" "}
              <i className="bi bi-star-fill" style={{ color: "#ffff00" }} /> (
              {/* To Do: Add num of reviews from backend */}
              {180})
            </h6>
            <Button
              variant="outline-primary"
              style={{ margin: "5px" }}
              href="/editTutorProfile"
            >
              Edit profile
            </Button>{" "}
          </Col>
        </Row>
        <Row style={{ marginTop: " 1rem" }}>
          <Col>
            <h3>Description</h3>
            {/* To Do: add non dummy value from the backend */}
            {"10 years experience in the academic and the industrial fields."}
          </Col>
        </Row>
        <Row style={{ marginTop: " 1rem" }}>
          <Col>
            <h3>Files</h3>
            <ListGroup variant="flush">
              {tutorProfile.files.map((file) => (
                <ListGroup.Item>
                  <div className="d-flex justify-content-between">
                    <a href={file.filePath} download={file.filePath}>
                      {file.fileTitle}
                    </a>
                    <h6>{file.approvalStatus}</h6>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>

        <Row style={{ marginTop: " 1rem" }}>
          <h1>Courses</h1>
          <Container style={{ overflowX: "scroll" }}>
            <Container style={{ display: "flex" }}>
              <Card
                style={{
                  width: "20rem",
                  fontSize: "1rem",
                  borderColor: "transparent",
                  minWidth: "270px",
                }}
              >
                <Card.Body>
                  <Button
                    variant="outline-primary"
                    style={{ margin: "5px" }}
                    href="/addCourse"
                  >
                    Add course
                  </Button>{" "}
                </Card.Body>
              </Card>
              {tutorProfile.Courses.map((course) => {
                // Make the course object structure uniform
                const formattedCourse = Object.assign(
                  course,
                  course.TutorCourse
                );
                return (
                  <CourseCard
                    tutorName={
                      tutorProfile.firstName + " " + tutorProfile.lastName
                    }
                    course={formattedCourse}
                  />
                );
              })}
            </Container>
          </Container>
        </Row>
      </Container>
    )
  );
}

export default TutorProfileTutorView;
