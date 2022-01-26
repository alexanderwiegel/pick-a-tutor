import React, { useState, useEffect, useReducer } from "react"
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  Form,
} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useParams } from "react-router-dom"
import apiEndPoints from "../Components/ApiEndpoints"
import CourseImage1 from "../images/course1.jpg"
import FileListItem from "../Components/FileListItem"

function EditCourseDetails() {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    }
  }

  const [courseDetails, setCourseDetails] = useState(null)
  const [formData, setFormData] = useReducer(formReducer, {})
  const { id } = useParams()

  const handleChange = (event) => {
    let newFormData = {}
    newFormData.name = event.target.name
    switch (newFormData.name) {
      case "files":
        newFormData.value = Array.from(event.target.files)
    }
    setFormData({
      name: event.target.name,
      value: (event.target.name === "files") ? Array.from(event.target.files) : event.target.value,
    })
    /* const target = event.target
    const value = target.value
    const name = target.name
    //ToDo: handle multiple files

    console.log("Value from " + name + " is " + value)

    /* 
          https://stackoverflow.com/questions/65733906/react-how-to-use-setstate-inside-functional-component
          and search for how to use setState inside functional component in React
          or maybe we can just change the propopery in course object https://stackoverflow.com/questions/37932434/how-to-change-a-property-on-an-object-without-mutating-it
          setCourse(...course, [name]: value)
         
    setCourseDetails({
      [name]: value,
    }) */
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const getCourseDetails = async (courseID) => {
    const courseDetails = await apiEndPoints.getCourseDetails(courseID)
    setCourseDetails(courseDetails)
  }

  useEffect(() => {
    getCourseDetails(id)
  }, [])

  return (
    courseDetails && (
      <Container>
        <Form>
          <Row style={{ marginTop: " 1rem" }}>
            <Col md={5}>
              {/* <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control
                                    type="file"
                                    style={{ display: "none" }}
                                />
                                <Button variant="outline-light" onClick>
                                    <Image
                                        fluid="true"
                                        thumbnail="true"
                                        src={img}
                                        name="submit"
                                        width="650px"
                                        height="500px"
                                        alt="submit"
                                    ></Image>
                                </Button>
                            </Form.Group> */}
              <Image
                fluid="true"
                thumbnail="true"
                // TODO: Add image from the backend
                src={CourseImage1}
                name="submit"
                width="650px"
                height="500px"
                alt="course image"
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
              <Form.Group controlId="courseName">
                <Form.Label as="b">Course name: </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  defaultValue={courseDetails.name}
                  placeholder="Course name"
                  className="mb-2"
                  onChange={handleChange}
                />
              </Form.Group>
              By{" "}
              <i>
                <a href={"/tutor/" + courseDetails.User.id}>
                  {courseDetails.User.firstName +
                    " " +
                    courseDetails.User.lastName}
                </a>
              </i>
              <br />
              <Row style={{ marginLeft: "5px" }}>
                <Form.Group controlId="coursePrice">
                  <Form.Label as="b">Price: €/Hour</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    name="coursePricePerHour"
                    defaultValue={courseDetails.coursePricePerHour}
                    placeholder="0"
                    className="mb-2"
                    onChange={handleChange}
                    style={{ width: "55px" }}
                  />
                </Form.Group>
              </Row>
              {courseDetails.rating}{" "}
              <i className="bi bi-star-fill" style={{ color: "#ffff00" }}></i>(
              {
                // Show the number of unreported reviews, TODO: check the correct way to get the unreported reviews
                courseDetails.Reviews.filter(
                  (review) => review.reportReview === null
                ).length
              }
              )
              <br />
              <Button
                variant="outline-primary"
                style={{ margin: "5px" }}
                onClick={handleSubmit}
              >
                Save
              </Button>{" "}
              <Button variant="outline-danger" style={{ margin: "5px" }}>
                Cancel
              </Button>{" "}
            </Col>
          </Row>

          <Row className="mb-2">
            <Col>
              <h3>Description</h3>
              <Form.Group controlId="description">
                <Form.Control
                  name="description"
                  as="textarea"
                  rows={8}
                  placeholder="Course description"
                  defaultValue={courseDetails.description}
                  // TODO: implement vertical scroll for long descriptions
                  style={{ overflowY: "scroll" }}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row style={{ marginTop: " 1rem" }}>
            <Col>
              <h3>Files</h3>
              <ListGroup variant="flush">
                {courseDetails.files.map((file) => (
                  <FileListItem file={file} isThisTutor={true} editMode={true} />
                ))}

                <ListGroup.Item>
                  <input
                    type="file"
                    id="fileupload"
                    style={{ display: "none" }}
                  />
                  <Form.Group controlId="tutorFile">
                    <Form.Label as="b">
                      Upload new files to this course
                    </Form.Label>
                    <Form.Control
                      name="files"
                      type="file"
                      onChange={handleChange}
                      multiple
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
            </Col>
          </Row>
        </Form>
      </Container>
    )
  )
}

export default EditCourseDetails
