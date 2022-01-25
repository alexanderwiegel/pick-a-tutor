import React, { useState, setState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  Card,
  Form,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CourseCard from "../Components/CourseCard";
import { Trash } from "react-bootstrap-icons";
import apiEndPoints from "../Components/ApiEndpoints";
import tutorImage1 from "../images/tutor1.jpg";

function EditTutorProfile(props) {
  const [tutorProfile, setTutorProfile] = useState(null);
  const [isFileDeleteModalOpen, setIsFileDeleteModalOpen] = useState(false);
  const id = localStorage.getItem("userID");
  const [fileToDeleteID, setFileToDelete] = useState(0);

  const getTutorProfile = async (tutorID) => {
    const tutorProfile = await apiEndPoints.getTutorProfile(tutorID);
    console.log("load tutor profile");
    console.log(tutorProfile);
    setTutorProfile(tutorProfile);
  };

  useEffect(() => {
    console.log("loading tutor profile effect ran");
    getTutorProfile(1);
  }, []);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    //ToDo: handle multiple files

    console.log("Value from " + name + " is " + value);
    setState({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    alert("edit has been submitted");
    event.preventDefault();
  };

  const uploadFileOnClick = () => {
    document.getElementById("file").click();
  };

  const handleFileDeleteModalClose = () => {
    setIsFileDeleteModalOpen(false);
  };

  const handleFileDeleteModalShow = () => {
    setIsFileDeleteModalOpen(true);
  };

  const handleFileDeleteClick = (event) => {
    alert("file deleted");
    handleFileDeleteModalClose();
    event.preventDefault();
  };

  return (
    tutorProfile && (
      <Container>
        <Form>
          <Row style={{ marginTop: " 1rem" }}>
            <Col md={5}>
              <Image
                // To Do: Switch to dynamically loaded images from the backend
                src={tutorImage1}
                fluid={true}
                thumbnail={true}
                className="floatRight"
                alt="tutor image"
                style={{ height: "400px", width: "600px" }}
              />
              <Form.Group controlId="imageFile">
                <Form.Label as="b">Upload new image</Form.Label>
                <Form.Control
                  name="img"
                  type="file"
                  size="sm"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={7} className="flexColumn">
              <Form.Group controlId="tutorFistName">
                <Form.Label as="b">First name: </Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  defaultValue={tutorProfile.firstName}
                  placeholder="First name"
                  className="mb-2"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="tutorLastName">
                <Form.Label as="b">Last name: </Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  defaultValue={tutorProfile.lastName}
                  placeholder="Last name"
                  className="mb-2"
                  onChange={handleChange}
                />
              </Form.Group>
              <h6>
                {/* To Do: add real value of the rating and num of reviews after receiving it from the backend */}
                {4.5}{" "}
                <i className="bi bi-star-fill" style={{ color: "#ffff00" }} /> (
                {/* To Do: Add num of reviews from backend */}
                {180})
              </h6>
              <Button
                type="submit"
                variant="outline-primary"
                style={{ margin: "5px" }}
                onClick={handleSubmit}
              >
                Submit
              </Button>{" "}
              <Button
                variant="outline-danger"
                style={{ margin: "5px" }}
                href="/"
              >
                Cancel
              </Button>{" "}
            </Col>
          </Row>
          <Row style={{ marginTop: " 1rem" }}>
            <div className="col">
              <h3>Description</h3>
              <Form.Group controlId="description">
                <Form.Control
                  name="description"
                  as="textarea"
                  rows={8}
                  placeholder="please type a description about yourself"
                  /* To Do: add non dummy value from the backend */
                  defaultValue={
                    "10 years experience in the academic and the industrial fields."
                  }
                  style={{ overflowY: "scroll" }}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </Row>
          <Row style={{ marginTop: " 1rem" }}>
            <div className="col">
              <h3>Files</h3>
              <ListGroup variant="flush">
                {tutorProfile.files.map((file) => (
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                      <a href={file.filePath} download={file.filePath}>
                        {file.fileTitle}
                      </a>
                      <h6>{file.approvalStatus}</h6>
                      <Button
                        variant="outline-danger"
                        className=""
                        onClick={() => {
                          setFileToDelete(file.id);
                          handleFileDeleteModalShow();
                        }}
                      >
                        <Trash />
                      </Button>
                      <Modal
                        show={isFileDeleteModalOpen}
                        onHide={handleFileDeleteModalClose}
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            Are you sure that you want to delete this file?
                            {fileToDeleteID}
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="d-flex justify-content-between">
                            <Button
                              variant="outline-dark"
                              onClick={handleFileDeleteClick}
                            >
                              YES
                            </Button>
                            <Button
                              variant="outline-dark"
                              onClick={handleFileDeleteModalClose}
                            >
                              NO
                            </Button>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </ListGroup.Item>
                ))}

                <ListGroup.Item>
                  <Form.Group controlId="tutorFile">
                    <Form.Label as="b">
                      Upload new files to your profile
                    </Form.Label>
                    <Form.Control
                      name="file"
                      type="file"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {/* <Button
                                        variant="outline-primary"
                                        style={{ margin: "5px" }}
                                        onClick={uploadFileOnClick}
                                    >
                                        Upload file
                                    </Button>{" "} */}
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Row>

          <Row style={{ marginTop: " 1rem" }}>
            <h1>Courses</h1>
            <Container style={{ overflowX: "scroll" }}>
              <Container style={{ display: "flex" }}>
                <Card
                  style={{
                    width: "20rem",
                    fontSize: "1rem",
                    borderColor: "transparent",
                    minWidth: "270px",
                  }}
                >
                  <Card.Body>
                    <Button
                      variant="outline-primary"
                      style={{ margin: "5px" }}
                      href="/addCourse"
                    >
                      Add course
                    </Button>{" "}
                  </Card.Body>
                </Card>
                {tutorProfile.Courses.map((course) => {
                  // Make the course object structure uniform
                  const formattedCourse = Object.assign(
                    course,
                    course.TutorCourse
                  );
                  return (
                    <CourseCard
                      tutorName={
                        tutorProfile.firstName + " " + tutorProfile.lastName
                      }
                      course={formattedCourse}
                    />
                  );
                })}
              </Container>
            </Container>
          </Row>
        </Form>
      </Container>
    )
  );
}

export default EditTutorProfile;
