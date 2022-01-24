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
import NewReviewForm from "../Components/NewReviewForm";
import apiEndPoints from "../Components/ApiEndpoints";
import { useParams } from "react-router-dom";

function CourseDetailsAnonynmousView(props) {
    const [loading, setLoading] = useState(true);
    const [courseDetails, setCourseDetails] = useState(null);
    const [courseReviews, setCourseReviews] = useState([]);
    const [courseFiles, setCourseFiles] = useState([]);
    const { id } = useParams();

    const getCourseDetails = async (courseID) => {
        const courseDetails = await apiEndPoints.getCourseDetails(courseID);
        console.log("Course " + courseID + " details loaded, result: ");
        console.log(courseDetails);
        setCourseDetails(courseDetails.data.data);
    };

    const getCourseReviews = async (courseID) => {
        const courseReviews = await apiEndPoints.getCourseReviews(courseID);
        console.log("Course " + courseID + " details reviews, result: ");
        console.log(courseReviews);
        setCourseReviews(courseReviews.data.data);
    };

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

    useEffect(() => {
        console.log("effect ran");
        getCourseDetails(id);
        getCourseReviews(id);
    }, []);

    return (
        courseDetails && (
            <Container>
                <Row className="mb-3">
                    {/* To Do: make the image more responsive */}
                    <Col md={5}>
                        <img
                            src="https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg"
                            
                            className="img-fluid img-thumbnail"
                            alt="Responsive image"
                            style={{ height: "500px", width: "650px" }}
                        />
                    </Col>
                    {/* To Do: make the text size appropriate related to the image */}
                    <Col md={7}>
                        <h3>{courseDetails[0].Course.name}</h3>
                        By{" "}
                        <i>
                            <a href={"/tutor/" + courseDetails[0].User.id}>
                                {courseDetails[0].User.firstName +
                                    " " +
                                    courseDetails[0].User.lastName}
                            </a>
                        </i>
                        <br />
                        {courseDetails[0].coursePricePerHour} €/Hour
                        &nbsp;&nbsp;&nbsp;&nbsp; {courseDetails[0].rating}{" "}
                        <i
                            className="bi bi-star-fill"
                            style={{ color: "#ffff00" }}
                        ></i>
                        <br />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <h3>Description</h3>
                        <p>{courseDetails[0].Course.description}</p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <h3>Files</h3>
                        <ListGroup variant="flush">
                            {courseFiles &&
                                courseFiles.map((file) => (
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
                    </div>

                    <div>
                        {courseReviews.map((review) => (
                            <Card className="mb-2">
                                <Card.Body>
                                    <Card.Title>{review.studentName}</Card.Title>
                                    <Card.Subtitle>
                                        <h6 className="text-muted">
                                            {review.updatedAt}
                                        </h6>
                                        <div>
                                            {Array.from(
                                                { length: review.rating },
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
                                                        Math.floor(review.rating),
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

                                    <Card.Text>
                                        {review.ratingComments}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Row>
            </Container>
        )
    );
}

export default CourseDetailsAnonynmousView;
