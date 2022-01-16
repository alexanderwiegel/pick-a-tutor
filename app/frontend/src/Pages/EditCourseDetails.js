import React from "react";
import {
    Container,
    Row,
    Col,
    ListGroup,
    Button,
    Image,
    Card,
    Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Plus, Trash } from "react-bootstrap-icons";

class EditCourseDetails extends React.Component {
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
            reviews: [
                {
                    id: 1,
                    userID: 1,
                    userName: "Reviewer Name",
                    text: "Very good course!",
                    date: "01.01.2022",
                    rate: 4.0,
                },
                {
                    id: 1,
                    userID: 1,
                    userName: "Reviewer Name",
                    text: "Very good course!",
                    date: "01.01.2022",
                    rate: 4.0,
                },
                {
                    id: 1,
                    userID: 1,
                    userName: "Reviewer Name",
                    text: "Very good course!",
                    date: "01.01.2022",
                    rate: 4.0,
                },
            ],
        };
        const tutor = { id: 1, name: "Tutor Name", link: "/tutors/3434" };

        const uploadFileOnClick = () => {
            document.getElementById("file").click();
        };

        return (
            <Container>
                <Form>
                    <Row style={{ marginTop: " 1rem" }}>
                        <Col md={5}>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control
                                    type="file"
                                    style={{ display: "none" }}
                                />
                                <Button variant="outline-light" onClick>
                                    <Image
                                        fluid="true"
                                        thumbnail="true"
                                        src={course.img}
                                        name="submit"
                                        width="650px"
                                        height="500px"
                                        alt="submit"
                                    ></Image>
                                </Button>
                            </Form.Group>
                        </Col>
                        <Col md={7} className="flexColumn">
                            <Form.Control
                                type="text"
                                placeholder={course.name}
                            />
                            By{" "}
                            <i>
                                <a href={tutor.link}>{tutor.name}</a>
                            </i>
                            <br />
                            <Row style={{ marginLeft: "5px" }}>
                                <Form.Control
                                    inline
                                    size="sm"
                                    type="text"
                                    placeholder={course.rate}
                                    style={{ width: "55px" }}
                                />
                                &nbsp; €/Hour &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            </Row>
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
                                Save
                            </Button>{" "}
                            <Button
                                variant="outline-primary"
                                style={{ margin: "5px" }}
                            >
                                Cancel
                            </Button>{" "}
                        </Col>
                    </Row>

                    <Row className="mb-2">
                        <Col>
                            <h3>Description</h3>
                            <Form.Control
                                as="textarea"
                                rows={8}
                                placeholder={course.description}
                                style={{ overflowY: "scroll" }}
                            />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: " 1rem" }}>
                        <Col>
                            <h3>Files</h3>
                            <ListGroup variant="flush">
                                {course.files.map((file) => (
                                    <ListGroup.Item>
                                        <div className="d-flex justify-content-between">
                                            <a href="" download={file.path}>
                                                {file.name}
                                            </a>
                                            <Button
                                                variant="outline-danger"
                                                className=""
                                            >
                                                <Trash />
                                            </Button>
                                        </div>
                                    </ListGroup.Item>
                                ))}

                                <ListGroup.Item>
                                    <input
                                        type="file"
                                        id="fileupload"
                                        style={{ display: "none" }}
                                    />
                                    <Button
                                        variant="outline-primary"
                                        style={{ margin: "5px" }}
                                        onClick={uploadFileOnClick}
                                    >
                                        Upload file
                                    </Button>{" "}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col>
                            <h3>Reviews</h3>
                            {course.reviews.map((review) => (
                                <Card className="mb-2">
                                    <Card.Body className="card-body">
                                        <Card.Title as="h5">
                                            {review.userName}
                                        </Card.Title>
                                        <Card.Subtitle>
                                            <h6 className="text-muted">
                                                {review.date}
                                            </h6>

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
                                                { length: 5 - review.rate },
                                                () => (
                                                    <i
                                                        className="bi bi-star"
                                                        style={{
                                                            color: "#ffff00",
                                                        }}
                                                    />
                                                )
                                            )}
                                        </Card.Subtitle>

                                        <Card.Text as="p">
                                            This course is awesome
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default EditCourseDetails;
