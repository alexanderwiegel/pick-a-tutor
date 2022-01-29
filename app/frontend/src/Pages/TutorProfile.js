import React, { useEffect, useState } from "react"
import { Container, Row, Col, ListGroup, Button, Image, Card } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import CourseCard from "../Components/CourseCard"
import { Link, useParams } from "react-router-dom"
import apiEndPoints from "../Components/ApiEndpoints"
import jwt_decode from "jwt-decode"
import tutorImage1 from "../images/tutor1.jpg"
import FileListItem from "../Components/FileListItem"

function TutorProfile() {
  const status = localStorage.getItem("statusCode")
  const encodedToken = localStorage.getItem("token")
  var token = ""
  if (encodedToken) token = jwt_decode(encodedToken)

  const [tutorProfile, setTutorProfile] = useState(null)
  const { id } = useParams()

  const getTutorProfile = async () => {
    const tutorProfile = await apiEndPoints.getTutorProfile(id)
    setTutorProfile(tutorProfile)
  }

  const [tutor, setTutor] = useState([])

  const getTutor = async () => {
    const data = await apiEndPoints.getTutorById(id)
    setTutor(() => data.data.data[0])
  }

  useEffect(() => {
    getTutorProfile()
    getTutor()
  }, [])

  return (
    tutorProfile && (
      <Container>
        <Row style={{ marginTop: " 1rem" }}>
          <Col md={5}>
            {console.log(tutorProfile.UserProfile?.profileImagePath)}
            <Image
              // TODO: Switch to dynamically loaded images from the backend
              src={tutorImage1}
              fluid={true}
              thumbnail={true}
              className="floatRight"
              alt="tutor image"
              style={{ height: "400px", width: "600px" }}
            />
          </Col>
          <Col md={7} className="flexColumn">
            <h3>{tutorProfile.firstName + " " + tutorProfile.lastName} {id === token.id ? "(You)" : ""}</h3>
            <h6>
              {tutorProfile.rating}
              <i className="bi bi-star-fill" style={{ color: "#ffff00" }} /> ({tutorProfile.nRatings})
            </h6>
            {
              // only logged in users should see a button
              status === null ?
                <></> :
                // only THIS tutor should see the "Edit profile" button, everyone else should see "Contact tutor"
                id !== token.id ?
                  <Link to={"/chat"} state={{ contact: tutor }}>
                    <Button variant="outline-primary" style={{ margin: "5px" }}>Contact tutor</Button>
                  </Link>
                  :
                  <Button variant="outline-primary" style={{ margin: "5px" }} href={"/editTutorProfile/"}>Edit profile</Button>
            }
          </Col>
        </Row>

        <Row style={{ marginTop: " 1rem" }}>
          <Col>
            <h3>Description</h3>
            {tutorProfile.description}
          </Col>
        </Row>

        <Row style={{ marginTop: " 1rem" }}>
          <Col>
            <h3>Files</h3>
            <ListGroup variant="flush">
              {
                // TODO: fix this, it is not showing anything for anonymous users
                // users who are not THIS tutor should only see approved files
                id != token.id ?
                  tutorProfile.files
                    .filter((file) => file.approvalStatus === "Approved")
                    .map((file) => (
                      <FileListItem file={file} key={file.id} />
                    ))
                  :
                  tutorProfile.files.map((file) => (
                    <FileListItem file={file} isThisTutor={true} key={file.id} />
                  ))
              }
            </ListGroup>
          </Col>
        </Row>

        <Row style={{ marginTop: " 1rem" }}>
          <h1>Courses</h1>
          <Container style={{ overflowX: "scroll" }}>
            <Container style={{ display: "flex" }}>
              {
                // users who are not THIS tutor should not see an "Add course" button
                id != token.id ?
                  <></> :
                  <Card style={{ width: "20rem", fontSize: "1rem", borderColor: "transparent", minWidth: "270px" }}>
                    <Card.Body>
                      <Button variant="outline-primary" style={{ margin: "5px" }} href="/addCourse">Add course</Button>
                    </Card.Body>
                  </Card>
              }

              {tutorProfile.Courses.map((course) => {
                // Make the course object structure uniform
                const formattedCourse = Object.assign(
                  course,
                  course.TutorCourse
                )
                return (
                  <CourseCard course={formattedCourse} key={formattedCourse.id} />
                )
              })}
            </Container>
          </Container>
        </Row>
      </Container >
    )
  )
}

export default TutorProfile
