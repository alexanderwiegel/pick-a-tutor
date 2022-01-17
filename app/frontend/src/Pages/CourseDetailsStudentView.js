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

class CourseDetailsStudentView extends React.Component {
    constructor(props) {
        super(props);
        const course = {
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

        this.state = {
            course: course,
            isReportFormModalOpen: false,
            isReviewFormModalOpen: false,
        };
    }


    render() {
        const tutor = { id: 1, name: "Tutor Name" };

        const handleReviewModalClose = () => {
            console.log("Closed Clicked");
            this.setState({ isReviewFormModalOpen: false });
        };

        const handleReviewModalShow = () => {
            this.setState({ isReviewFormModalOpen: true });
        };

        const handleReportModalClose = () => {
            console.log("Closed Clicked");
            this.setState({ isReportFormModalOpen: false });
        };

        const handleReportModalShow = () => {
            this.setState({ isReportFormModalOpen: true });
        };

        return (
            <Container>
                <Row className="mb-3">
                    {/* To Do: make the image more responsive */}
                    <Col md={5}>
                        <img
                            src={this.state.course.img}
                            className="img-fluid img-thumbnail"
                            alt="Responsive image"
                            style={{ height: "500px", width: "650px" }}
                        />
                    </Col>
                    {/* To Do: make the text size appropriate related to the image */}
                    <Col md={7}>
                        <h3>{this.state.course.name}</h3>
                        By{" "}
                        <i>
                            <a href={"/tutor/" + tutor.id}>{tutor.name}</a>
                        </i>
                        <br />
                        {this.state.course.rate} €/Hour &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        {this.state.course.rating}{" "}
                        <i
                            className="bi bi-star-fill"
                            style={{ color: "#ffff00" }}
                        ></i>
                        <br />
                        <Button variant="outline-primary" href={"/chat/" + tutor.id}>Contact tutor</Button>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <h3>Description</h3>
                        <p>{this.state.course.description}</p>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <h3>Files</h3>
                        <ListGroup variant="flush">
                            {this.state.course.files.map((file) => (
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
                    <div className="d-flex justify-content-between mb-2">
                        <h3>Reviews</h3>
                        <Button
                            variant="outline-primary"
                            onClick={handleReviewModalShow}
                        >
                            Write review
                        </Button>
                        <Modal
                            show={this.state.isReviewFormModalOpen}
                            onHide={handleReviewModalClose}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Review your experience
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <NewReviewForm />
                            </Modal.Body>
                        </Modal>
                    </div>

                    <div>
                        {this.state.course.reviews.map((review) => (
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
                                                        5 -
                                                        Math.floor(review.rate),
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

                                    <Card.Text>
                                        This course is awesome!
                                    </Card.Text>

                                    <Button
                                        variant="outline-danger"
                                        onClick={handleReportModalShow}
                                        
                                    >
                                        Report
                                    </Button>
                                    <Modal
                                        show={this.state.isReportFormModalOpen}
                                        onHide={handleReportModalClose}
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                Please explain why you are
                                                reporting this review!
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
}

export default CourseDetailsStudentView;
