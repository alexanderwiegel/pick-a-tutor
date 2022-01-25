import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Card,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReviewReportForm from "../Components/ReviewReportForm";
import NewCourseReviewForm from "../Components/NewCourseReviewForm";
import apiEndPoints from "../Components/ApiEndpoints";
import { useParams } from "react-router-dom";
import CourseImage1 from "../images/course1.jpg";

function CourseDetailsTutorView(props) {
  const { id } = useParams();

  const [courseDetails, setCourseDetails] = useState(null);
  const [isReportFormModalOpen, setReportFormModalOpen] = useState(false);
  const [reviewToReportID, setReviewToReportID] = useState(0);



  const handleReportModalClose = () => {
    console.log("Closed Clicked");
    setReportFormModalOpen(false);
  };

  const handleReportModalShow = () => {
    setReportFormModalOpen(true);
  };

  const getCourseDetails = async (courseID) => {
    const courseDetails = await apiEndPoints.getCourseDetails(courseID);
    setCourseDetails(courseDetails);
  };

  useEffect(() => {
    console.log("get course details effect ran");
    getCourseDetails(id);
  }, []);

  return (
    courseDetails && (
      <Container>
        <Row className="mb-3">
          {/* To Do: make the image more responsive */}
          <Col md={5}>
            <img
              // To Do: Add image from the backend
              src={CourseImage1}
              className="img-fluid img-thumbnail"
              alt="Responsive image"
              style={{ height: "500px", width: "650px" }}
            />
          </Col>
          {/* To Do: make the text size appropriate related to the image */}
          <Col md={7}>
            <h3>{courseDetails.name}</h3>
            By{" "}
            <i>
              <a href={"/tutor/" + courseDetails.User.id}>
                {courseDetails.User.firstName +
                  " " +
                  courseDetails.User.lastName}
              </a>
            </i>
            <br />
            {courseDetails.coursePricePerHour} €/Hour &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            {courseDetails.rating}{" "}
            <i className="bi bi-star-fill" style={{ color: "#ffff00" }}></i> (
            {
              // Show the number of unreported reviews, To Do: check the correct way to get the unreported reviews
              courseDetails.Reviews.filter(
                (review) => review.reportReview === null
              ).length
            }
            )
            <br />
            <Button
              variant="outline-primary"
              style={{ margin: "5px" }}
              href={"/editCourseDetails/" + id}
            >
              Edit Course
            </Button>{" "}
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
              {courseDetails.files.map((file) => (
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
        <Row className="mb-3">
          <h3>Reviews</h3>

          <div>
            {courseDetails.Reviews.filter(
              (review) => review.reportReview === null
            ).map((review) => (
              <Card className="mb-2">
                <Card.Body>
                  {/* To Do: Add reviewer name from the backend */}
                  <Card.Title>{"Student name"}</Card.Title>
                  <Card.Subtitle>
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

                  <Card.Text>This course is awesome!</Card.Text>

                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      setReviewToReportID(review.id);
                      handleReportModalShow();
                    }}
                  >
                    Report
                  </Button>
                  <Modal
                    show={isReportFormModalOpen}
                    onHide={handleReportModalClose}
                    centered
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>
                        Please explain why you are reporting this review! {reviewToReportID}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <ReviewReportForm reviewID={reviewToReportID}/>
                    </Modal.Body>
                  </Modal>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Row>
      </Container>
    )
  );
}

export default CourseDetailsTutorView;
