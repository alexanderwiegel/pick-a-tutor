import React, { useState, useEffect, useReducer } from "react"
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
import Alert from 'react-bootstrap/Alert'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"

function EditTutorProfile() {
  const navigate = useNavigate();
  const DeleteAccount = ({ email, show, setShow }) => {
    return (
      <>
        <Alert show={show} variant="danger">
          <Alert.Heading>Delete your account?!</Alert.Heading>
          <p>
            Are you sure you want to delete your account ?

            If you want to change your password, simply do so right <a href="/forgotp">here</a>.<br />

            <b>Please note</b>: If you delete your account, you won't be able to reactivate it later.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} style={{ margin: 5 }} variant="danger">
              Never mind, keep my account
            </Button>
            <Button onClick={async () => HandleSubmit(email)} style={{ margin: 5 }} variant="secondary">
              Delete my account
            </Button>
          </div>
        </Alert>
      </>
    );
  }
  const HandleSubmit = async (email) => {
    const response = await apiEndPoints.deleteTutor(email)
    console.log("data after deletion = ", response)
    if (response.data.success == true) {
      localStorage.clear()
      alert(response.data.message)
      navigate('/login');
    }
  }


  const SUPPORTED_IMG_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
  const schema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    gender: yup.number().integer().min(0).max(2),
    description: yup.string(),
    img: yup.mixed().test('fileType', "Unsupported File Format", value => (typeof value === 'undefined') ? true : SUPPORTED_IMG_FORMATS.includes(value.type)), // if no image is uploaded return true, because it tries to validate the image even if there is no files selected
    isFull: yup.boolean(),
    coursePricePerHour: yup.number().integer().min(0),
    files: yup.array().of(yup.string()),
  })

  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };
  const [formData, setFormData] = useReducer(formReducer, {});

  const [tutorProfile, setTutorProfile] = useState(null)

  const [show, setShow] = useState(false);

  const id = localStorage.getItem("userID")

  const getTutorProfile = async (tutorID) => {
    const tutorProfile = await apiEndPoints.getTutorProfile(tutorID)
    setTutorProfile(tutorProfile)
    console.log(tutorProfile)
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
      /* case "gender":
        newFormData.value = parseInt(event.target.value);
        break; */
      default:
        newFormData.value = event.target.value
    }

    setFormData(newFormData);
  };


  const handleSubmit = async (event) => {
    console.log('in edit tutor profile')
    await schema.validate(formData).then(async function (formData) {
      await apiEndPoints.updateTutorProfile(tutorProfile.email, formData)
        .then(function (response) {
          console.log("submitted tutor profile form details")
          console.log(response)
          if (!alert(response.data.message))
            window.location.reload()

          event.preventDefault()
        })
    }).catch(function (err) {
      console.log(err);
      alert("Tutor data is not valid, please enter valid data berfore submission!")
    });

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
                src={(tutorProfile.img) ? `http://20.113.25.17:3001/api/downloadprofilefile?path=${tutorProfile.img.filePath}` : tutorImage1}
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

              <Form.Group controlId="tutorGender">
                <Form.Label as="b">Gender: </Form.Label> &nbsp;&nbsp;
                <Form.Check
                  inline
                  id="radio-m"
                  name="gender"
                  type="radio"
                  aria-label="radio male"
                  label="Male"
                  onClick={handleChange}
                  defaultChecked={tutorProfile.gender == 0}
                  value="0"
                />
                <Form.Check
                  inline
                  id="radio-f"
                  name="gender"
                  type="radio"
                  aria-label="radio female"
                  label="Female"
                  defaultChecked={tutorProfile.gender == 1}
                  onClick={handleChange}
                  value="1"
                />
                <Form.Check
                  inline
                  id="radio-d"
                  name="gender"
                  type="radio"
                  aria-label="radio diverse"
                  label="Diverse"
                  onClick={handleChange}
                  defaultChecked={tutorProfile.gender == 2}
                  value="2"
                />
              </Form.Group>


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
                href={`/tutor/${tutorProfile.id}`}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                style={{ margin: "5px" }}
                onClick={() => setShow(preVal => true)}
              >
                Delete Account
              </Button>
              <DeleteAccount email={tutorProfile.email} show={show} setShow={setShow} />
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
                  defaultValue={tutorProfile.description}
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
                  <FileListItem file={file} isThisTutor={true} editMode={true} key={file.id} onDelete={handleDeleteFile} />
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
      </Container >
    )
  )
}




export default EditTutorProfile
