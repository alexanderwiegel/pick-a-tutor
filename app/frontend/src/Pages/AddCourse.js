import React, { useState, setState } from "react"
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
import FileListItem from "../Components/FileListItem"

function AddCourse() {
  const course_data = {
    id: 1,
    name: "Course Name",
    img: "https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg",
    tutorID: 1,
    rating: 0,
    rate: 0,
    description: "",
    files: [],

    reviews: [],
  }

  const [course, setCourse] = useState(course_data)

  const handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    //ToDo: handle multiple files

    /* 
          https://stackoverflow.com/questions/65733906/react-how-to-use-setstate-inside-functional-component
          and search for how to use setState inside functional component in React
          or maybe we can just change the propopery in course object https://stackoverflow.com/questions/37932434/how-to-change-a-property-on-an-object-without-mutating-it
          setCourse(...course, [name]: value)
         */
    setState({
      ...course,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const tutor = { id: 1, name: "Tutor Name", link: "/tutors/3434" }

  const uploadFileOnClick = () => {
    document.getElementById("file").click()
  }

  return (
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
              src={course.img}
              name="submit"
              width="650px"
              height="500px"
              alt="course image"
            />
            <Form.Group controlId="imageFile">
              <Form.Label as="b">Upload image for the course</Form.Label>
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
              <Form.Label as="b">Name: </Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="please type the course name"
                className="mb-2"
                onChange={handleChange}
              />
            </Form.Group>
            By{" "}
            <i>
              <a href={tutor.link}>{tutor.name}</a>
            </i>
            <br />
            <Row style={{ marginLeft: "5px" }}>
              <Form.Group controlId="coursePrice">
                <Form.Label as="b">Price: €/Hour</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  name="rate"
                  placeholder="price"
                  className="mb-2"
                  onChange={handleChange}
                  style={{ width: "55px" }}
                />
              </Form.Group>
            </Row>
            <br />
            <Button variant="outline-primary" style={{ margin: "5px" }}>
              Save
            </Button>{" "}
            <Button
              type="submit"
              variant="outline-primary"
              style={{ margin: "5px" }}
              onClick={handleSubmit}
            >
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
                placeholder="please type a description about this course"
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
              {course.files.map((file) => (
                <FileListItem file={file} editMode={true} />
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
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default AddCourse
