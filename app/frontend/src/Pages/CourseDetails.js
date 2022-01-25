import React, { useState, useEffect } from "react"
import { Container, Row, Col, ListGroup, Button, Card, Modal } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import ReviewReportForm from "../Components/ReviewReportForm"
import NewCourseReviewForm from "../Components/NewCourseReviewForm"
import apiEndPoints from "../Components/ApiEndpoints"
import { useParams } from "react-router-dom"
import jwt_decode from "jwt-decode"
import CourseImage1 from "../images/course1.jpg"
import FileListItem from "../Components/FileListItem"

function CourseDetails() {
  const status = localStorage.getItem('statusCode')
  const encodedToken = localStorage.getItem("token")
  var token = ""
  if (encodedToken) token = jwt_decode(encodedToken)
  const { id } = useParams()

  const [courseDetails, setCourseDetails] = useState(null)
  const [isReportFormModalOpen, setReportFormModalOpen] = useState(false)
  const [isReviewFormModalOpen, setReviewFormModalOpen] = useState(false)
  const [reviewToReportID, setReviewToReportID] = useState(0)

  const handleReviewModalClose = () => {
    setReviewFormModalOpen(false)
  }

  const handleReviewModalShow = () => {
    setReviewFormModalOpen(true)
  }

  const handleReportModalClose = () => {
    setReportFormModalOpen(false)
  }

  const handleReportModalShow = () => {
    setReportFormModalOpen(true)
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
              src={CourseImage1}
              className="img-fluid img-thumbnail"
              alt="Responsive image"
              style={{ height: "500px", width: "650px" }}
            />
          </Col>
          {/* TODO: make the text size appropriate related to the image */}
          <Col md={7}>
            <h3>{courseDetails.name}</h3>
            By{" "}
            <i>
              <a href={"/tutor/" + courseDetails.User.id}>
                {courseDetails.User.firstName + " " + courseDetails.User.lastName} {courseDetails.User.id != token.id ? "" : "(You)"}
              </a>
            </i>
            <br />
            {courseDetails.coursePricePerHour} €/Hour &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            {courseDetails.rating}{" "}
            <i className="bi bi-star-fill" style={{ color: "#ffff00" }}></i> (
            {
              // Show the number of unreported reviews, TODO: check the correct way to get the unreported reviews
              courseDetails.Reviews.filter(
                (review) => review.reportReview === null
              ).length
            }
            )
            <br />
            {
            }
            {
              // only (logged in) users who are not THIS tutor should see the "Contact" button
              status === null ? <div /> : courseDetails.User.id != token.id ?
                // TODO: fix forward to Chat
                <Button variant="outline-primary" href={"/chat/" + courseDetails.User.id}>Contact tutor</Button> :
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
                status && courseDetails.User.id != token.id ?
                  courseDetails.files
                    .filter((file) => file.approvalStatus === "Approved")
                    .map((file) => (
                      <FileListItem file={file} />
                    ))
                  :
                  courseDetails.files.map((file) => (
                    <FileListItem file={file} isThisTutor={true} />
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
              // only (logged in) users who are neither THIS tutor nor an admin should see the "Write review" button
              status && courseDetails.User.id != token.id && status != "Admin" ?
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
            {/* TODO: check the correct way to get the unreported reviews */}
            {courseDetails.Reviews.filter(
              (review) => review.reportReview === null
            ).map((review) => (
              <Card className="mb-2">
                <Card.Body>
                  {/* TODO: Add reviewer name from the backend */}
                  <Card.Title>{"Student name"}</Card.Title>
                  <Card.Subtitle>
                    {/* TODO: Check if I should show the review creation date or update data */}
                    <h6 className="text-muted">{review.createdAt}</h6>
                    <div>
                      {Array.from({ length: review.rating }, () => (
                        <i
                          className="bi bi-star-fill"
                          style={{
                            color: "#ffff00",
                          }}
                        />
                      ))}
                      {Array.from(
                        {
                          length: 5 - Math.floor(review.rating),
                        },
                        () => (
                          <i
                            className="bi bi-star"
                            style={{
                              color: "#ffff00",
                            }}
                          />
                        )
                      )}
                      ({review.rating})
                    </div>
                  </Card.Subtitle>

                  <Card.Text>{review.ratingComments}</Card.Text>

                  {
                    // check if this works
                    // only (logged in) users should see the "Report" button
                    status &&
                    <Button variant="outline-danger"
                      onClick={() => {
                        setReviewToReportID(review.id)
                        handleReportModalShow()
                      }}
                    >Report</Button>
                  }

                  <Modal show={isReportFormModalOpen} onHide={handleReportModalClose} centered>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        Please explain why you are reporting this review!
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <ReviewReportForm reviewID={reviewToReportID} />
                    </Modal.Body>
                  </Modal>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Row>
      </Container>
    )
  )
}

export default CourseDetails