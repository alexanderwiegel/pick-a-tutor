import React, {useState} from "react";
import { Container, Row, Col, Button, ListGroup, Card, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class CourseDetailsTutorView extends React.Component {
    render() {
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
        };
        const tutor = { id: 1, name: "Tutor Name", link: "/tutors/3434" };
        
        
        return (
            <Container>
                <Row className="mb-2">
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
                        >
                            Edit Course
                        </Button>{" "}
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col>
                        <h3>Description</h3>
                        <p>{course.description}</p>
                    </Col>
                </Row>
                <Row className="mb-2">
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
                <div className="row mb-2">
                    <div className="col">
                        <h3>Reviews</h3>
                    </div>
                </div>
                

                <div className="card mb-2">
                    <div className="card-body">
                        <div className="card-title">
                            <h5>Reviewer Name</h5>
                        </div>

                        <div className="card-subtitle">
                            <h6 className="text-muted">DD.MM.YYYY</h6>
                            <i
                                className="bi bi-star-fill"
                                style={{ color: "#ffff00" }}
                            ></i>
                            <i
                                className="bi bi-star-fill"
                                style={{ color: "#ffff00" }}
                            ></i>
                            <i
                                className="bi bi-star-fill"
                                style={{ color: "#ffff00" }}
                            ></i>
                            <i
                                className="bi bi-star-fill"
                                style={{ color: "#ffff00" }}
                            ></i>
                            <i className="bi bi-star"></i>
                        </div>
                        <p className="card-text">This course is awesome</p>

                        <a href="#" className="card-link">
                            Report
                        </a>
                    </div>
                </div>

                <div className="card mb-2">
                    <div className="card-body">
                        <h5 className="card-title">
                            Please explain why you are reporting this review.
                        </h5>
                        <textarea
                            className="form-control mb-2"
                            id="exampleFormControlTextarea1"
                            rows="4"
                        ></textarea>
                        <button
                            type="button"
                            className="btn btn-outline-dark card-link"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-dark card-link"
                        >
                            Report
                        </button>
                    </div>
                </div>

                <div className="card mb-2">
                    <div className="card-body">
                        <div className="card-title">
                            <h5>Reviewer Name</h5>
                        </div>

                        <div className="card-subtitle">
                            <h6 className="text-muted">DD.MM.YYYY</h6>
                            <i
                                className="bi bi-star-fill"
                                style={{ color: "#ffff00" }}
                            ></i>
                            <i
                                className="bi bi-star-fill"
                                style={{ color: "#ffff00" }}
                            ></i>
                            <i
                                className="bi bi-star-fill"
                                style={{ color: "#ffff00" }}
                            ></i>
                            <i
                                className="bi bi-star-fill"
                                style={{ color: "#ffff00" }}
                            ></i>
                            <i className="bi bi-star"></i>
                        </div>
                        <p className="card-text">This course is awesome</p>

                        <a href="#" className="card-link">
                            Report
                        </a>
                    </div>
                </div>
            </Container>
        );
    }
}

export default CourseDetailsTutorView;
