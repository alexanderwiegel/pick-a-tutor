import React, { useState, setState, useEffect, useReducer } from "react"
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  Card,
  Form,
} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import CourseCard from "../Components/CourseCard"
import apiEndPoints from "../Components/ApiEndpoints"
import tutorImage1 from "../images/tutor1.jpg"
import FileListItem from "../Components/FileListItem"

function EditTutorProfile(props) {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };
  const [formData, setFormData] = useReducer(formReducer, {});

  const [tutorProfile, setTutorProfile] = useState(null)

  const id = localStorage.getItem("userID")

  const getTutorProfile = async (tutorID) => {
    const tutorProfile = await apiEndPoints.getTutorProfile(tutorID)
    setTutorProfile(tutorProfile)
  }

  useEffect(() => {
    getTutorProfile(id)
  }, [])

  const handleChange = (event) => {
    console.log(event)
    let newFormData = {};
    newFormData.name = event.target.name;
    switch (newFormData.name) {
      case "files":
        newFormData.value = Array.from(event.target.files);
        break;
      case "img":
        newFormData.value = Array.from(event.target.files)[0];
        break;

      default:
        newFormData.value = event.target.value
    }

    setFormData(newFormData);
  };


  const handleSubmit = async (event) => {
    console.log('in edit tutor profile')
    await apiEndPoints.updateTutorProfile(tutorProfile.email, formData)
      .then(function (response) {
        console.log("Submiteed course form details")
        console.log(response)
        if (!alert(response.data.message))
          window.location.reload()

        event.preventDefault()
      })
  };

  const handleDeleteFile = async (fileToDeleteID) => {
    await apiEndPoints.deleteTutorFile(fileToDeleteID)
      .then(function (response) {
        if (!alert(response.data.message))
          window.location.reload()
      })
  }

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
                {tutorProfile.rating}
                <i className="bi bi-star-fill" style={{ color: "#ffff00" }} /> (
                {/* To Do: Add num of reviews from backend */}
                {180})
              </h6>
              <Button
                variant="outline-primary"
                style={{ margin: "5px" }}
                onClick={handleSubmit}
              >
                Save
              </Button>
              <Button
                variant="outline-danger"
                style={{ margin: "5px" }}
                href="/"
              >
                Cancel
              </Button>
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
                  <FileListItem file={file} isThisTutor={true} editMode={true} key={file.id} onDelete={handleDeleteFile}/>
                ))}

                <ListGroup.Item>
                  <Form.Group controlId="tutorFile">
                    <Form.Label as="b">
                      Upload new files to your profile
                    </Form.Label>
                    <Form.Control
                      name="files"
                      type="file"
                      onChange={handleChange}
                      multiple
                    />
                  </Form.Group>
                  
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
                    </Button>
                  </Card.Body>
                </Card>
                {tutorProfile.Courses.map((course) => {
                  // Make the course object structure uniform
                  const formattedCourse = Object.assign(
                    course,
                    course.TutorCourse
                  )
                  return (
                    <CourseCard
                      tutorName={
                        tutorProfile.firstName + " " + tutorProfile.lastName
                      }
                      course={formattedCourse}
                      key={formattedCourse.id}
                    />
                  )
                })}
              </Container>
            </Container>
          </Row>
        </Form>
      </Container>
    )
  )
}

export default EditTutorProfile
