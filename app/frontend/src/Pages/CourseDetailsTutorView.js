import React, { useState } from "react";
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
import NewReviewForm from "../Components/NewReviewForm";

function CourseDetailsTutorView(props) {
  const courseDetails = {
    id: 1,
    name: "Course Name",
    img: "https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg",
    tutorID: 1,
    rating: 4.3,
    rate: 20,
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, diam nec accumsan egestas, odio nisl tempus dolor, vitae aliquam dui nunc eget ipsum. Aenean vitae est maximus, aliquam ligula non, placerat lacus. Nunc varius eleifend diam nec luctus. Fusce quis condimentum diam. Maecenas viverra condimentum ipsum et feugiat. Donec eget tortor vitae nisi vulputate pellentesque. Pellentesque vel nisi accumsan, faucibus lacus eu, ultrices eros. Integer mattis odio eu egestas fermentum. Donec tempor, metus ut gravida pulvinar, erat nisi fermentum mauris, at pharetra enim arcu eu nunc. Nullam posuere eleifend leo id lacinia. Suspendisse accumsan, arcu in sodales congue, ex dolor gravida sapien, quis posuere turpis mi sed lorem. Nam a nibh sed augue bibendum consectetur. Aliquam feugiat placerat ex ut auctor. ",
    files: [
        {
            id: 1,
            name: "File name",
            path: "file.txt",
        },
        {
            id: 1,
            name: "File name",
            path: "file.txt",
        },
        {
            id: 1,
            name: "File name",
            path: "file.txt",
        },
        {
            id: 1,
            name: "File name",
            path: "file.txt",
        },
    ],
    reviews: [
        {
            id: 1,
            writerID: 1,
            writerName: "Reviewer Name",
            text: "Very good course!",
            date: "01.01.2022",
            rate: 4.7,
        },
        {
            id: 2,
            writerID: 1,
            writerName: "Reviewer Name",
            text: "Very good course!",
            date: "01.01.2022",
            rate: 4.7,
        },
        {
            id: 3,
            writerID: 1,
            writerName: "Reviewer Name",
            text: "Very good course!",
            date: "01.01.2022",
            rate: 4.7,
        },
    ],
};

const [course, setCourse] = useState(courseDetails);
const [isReportFormModalOpen, setReportFormModalOpen] = useState(false);
const [isReviewFormModalOpen, setReviewFormModalOpen] = useState(false);


const tutor = { id: 1, name: "Tutor Name" };

const handleReviewModalClose = () => {
    console.log("Closed Clicked");
    setReviewFormModalOpen(false);
};

const handleReviewModalShow = () => {
    setReviewFormModalOpen(true);
};

const handleReportModalClose = () => {
    console.log("Closed Clicked");
    setReportFormModalOpen(false);
};

const handleReportModalShow = () => {   
    setReportFormModalOpen(true);
};

    return (
        <Container>
            <Row className="mb-3">
                <Col md={5}>
                    <img
                        src={course.img}
                        className="img-fluid img-thumbnail"
                        alt="Responsive image"
                        style={{ height: "500px", width: "650px" }}
                    />
                </Col>
                <Col md={7} className="flexColumn">
                    <h3>{course.name}</h3>
                    By{" "}
                    <i>
                        <a href={tutor.link}>{tutor.name}</a>
                    </i>
                    <br />
                    {course.rate} €/Hour &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    {course.rating}{" "}
                    <i
                        className="bi bi-star-fill"
                        style={{ color: "#ffff00" }}
                    ></i>
                    <br />
                    <Button
                        variant="outline-primary"
                        style={{ margin: "5px" }}
                        href={"/editCourseDetails/" + course.id}
                    >
                        Edit Course
                    </Button>{" "}
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <h3>Description</h3>
                    <p>{course.description}</p>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <h3>Files</h3>
                    <ListGroup variant="flush">
                        {course.files.map((file) => (
                            <ListGroup.Item>
                                <div className="d-flex justify-content-between">
                                    <a href="" download={file.path}>
                                        {file.name}
                                    </a>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <h3>Reviews</h3>

                <div>
                    {course.reviews.map((review) => (
                        <Card className="mb-2">
                            <Card.Body>
                                <Card.Title>{review.writerName}</Card.Title>
                                <Card.Subtitle>
                                    <h6 className="text-muted">
                                        {review.date}
                                    </h6>
                                    <div>
                                        {Array.from(
                                            { length: review.rate },
                                            () => (
                                                <i
                                                    className="bi bi-star-fill"
                                                    style={{
                                                        color: "#ffff00",
                                                    }}
                                                />
                                            )
                                        )}
                                        {Array.from(
                                            {
                                                length:
                                                    5 - Math.floor(review.rate),
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
                                        ({review.rate})
                                    </div>
                                </Card.Subtitle>

                                <Card.Text>This course is awesome!</Card.Text>

                                <Button
                                    variant="outline-danger"
                                    onClick={handleReportModalShow}
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
                                            Please explain why you are reporting
                                            this review!
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <ReviewReportForm />
                                    </Modal.Body>
                                </Modal>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Row>
        </Container>
    );
}

export default CourseDetailsTutorView;
