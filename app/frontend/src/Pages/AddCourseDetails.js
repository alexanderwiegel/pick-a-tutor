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

class AddCourseDetails extends React.Component {
    render() {
        const course = {
            id: 1,
            name: "Course name",
            img: "https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg",
            tutorID: 1,
            rating: 4.3,
            rate: 20,
            description:
                "Please write course description.",
            files: [],
            reviews: [],
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
                    s
                </Form>
            </Container>
        );
    }
}

export default AddCourseDetails;
