import React, { useState, useEffect } from "react"
import { Container, Row, Col, ListGroup, Button, Modal } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import NewCourseReviewForm from "../Components/NewCourseReviewForm"
import apiEndPoints from "../Components/ApiEndpoints"
import { Link, useParams } from "react-router-dom"
import jwt_decode from "jwt-decode"
import CourseImage1 from "../images/course1.jpg"
import FileListItem from "../Components/FileListItem"
import Review from "../Components/Review"

function CourseDetails() {
  const status = localStorage.getItem("statusCode")
  const encodedToken = localStorage.getItem("token")
  var token = ""
  if (encodedToken) token = jwt_decode(encodedToken)
  const { id } = useParams()

  const [courseDetails, setCourseDetails] = useState(null)
  const [isReviewFormModalOpen, setReviewFormModalOpen] = useState(false)


  const handleReviewModalClose = () => {
    setReviewFormModalOpen(false)
  }

  const handleReviewModalShow = () => {
    setReviewFormModalOpen(true)
  }

  const getCourseDetails = async (courseID) => {
    const courseDetails = await apiEndPoints.getCourseDetails(courseID)
    setCourseDetails(courseDetails)
  }

  useEffect(() => {
    getCourseDetails(id)
  }, [])

  return (
    courseDetails && (
      <Container>
        <Row className="mb-3">
          {/* TODO: make the image more responsive */}
          <Col md={5}>
            <img
              // TODO: Add image from the backend
              src={(courseDetails.img) ? `http://20.113.25.17:3001/api/downloadprofilefile?path=${courseDetails.img.filePath}` : CourseImage1}
              className="img-fluid img-thumbnail"
              style={{ aspectRatio: 3 / 2 }}
            />
          </Col>
          {/* TODO: make the text size appropriate related to the image */}
          <Col md={7}>
            <h3>{courseDetails.name}</h3>
            By
            <i>
              <a href={"/tutor/" + courseDetails.User.id}>
                {" " + courseDetails.User.firstName + " " + courseDetails.User.lastName} {courseDetails.User.id !== token.id ? "" : "(You)"}
              </a>
            </i>
            <br />
            {(courseDetails.coursePricePerHour === null) ? 0 : courseDetails.coursePricePerHour} €/Hour &nbsp;&nbsp;&nbsp;&nbsp;
            {courseDetails.rating}
            <i className="bi bi-star-fill" style={{ color: "#ffff00" }} />({courseDetails.nRatings})
            <br />
            {
              // only (logged in) users who are not THIS tutor should see the "Contact" button
              status === null ? <div /> : courseDetails.User.id !== token.id ?
                <Link to={"/chat"} state={{ contact: courseDetails.User }}><Button variant="outline-primary">Contact tutor</Button></Link> :
                <Button variant="outline-primary" style={{ margin: "5px" }} href={"/editCourse/" + id}>Edit Course</Button>
            }
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <h3>Description</h3>
            <p>{courseDetails.description}</p>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <h3>Files</h3>
            <ListGroup variant="flush">
              {
                // TODO: check if this works
                // users who are not THIS tutor should only see approved files
                status && courseDetails.User.id !== token.id ?
                  courseDetails.files
                    .filter((file) => file.approvalStatus === "Approved")
                    .map((file) => (
                      <FileListItem file={file} key={file.id} />
                    ))
                  :
                  courseDetails.files.map((file) => (
                    <FileListItem file={file} isThisTutor={true} key={file.id} />
                  ))
              }
            </ListGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <div className="d-flex justify-content-between mb-2">
            <h3>Reviews</h3>
            {
              // check if this works
              // only (logged in) students should see the "Write review" button
              status && courseDetails.User.id !== token.id && status !== "Admin" && status !== "Tutor" ?
                <Button variant="outline-primary" onClick={handleReviewModalShow}>
                  Write review
                </Button> : <div />
            }
            <Modal show={isReviewFormModalOpen} onHide={handleReviewModalClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Review your experience</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <NewCourseReviewForm courseID={courseDetails.id} tutorID={courseDetails.User.id} />
              </Modal.Body>
            </Modal>
          </div>

          <div>
            {courseDetails.Reviews.reverse().map((review) => (
              <Review review={review} key={review.id} />
            ))}
          </div>
        </Row>
      </Container>
    )
  )
}

export default CourseDetails