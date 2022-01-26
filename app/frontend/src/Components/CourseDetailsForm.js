import React, { useReducer } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  Form,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import apiEndPoints from "./ApiEndpoints";
import FileListItem from "../Components/FileListItem";
import CourseImage1 from "../images/course1.jpg";


function CourseDetailsForm({ isNewCourse, courseDetails }) {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };
  const [formData, setFormData] = useReducer(formReducer, {});

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
      case "isFull":
        newFormData.value = event.target.checked
        break;
      
      default:
        newFormData.value = event.target.value
    }

    setFormData(newFormData);
  };

  
  const handleSubmit = async (event) => {
    console.log('in submit course details form')
    const response = (isNewCourse) ? await apiEndPoints.addNewCourse(formData) : await apiEndPoints.updateCourseDetails(courseDetails.id, formData)
    console.log("Submiteed course form details")
    console.log(response)
    if (!response.data.success)
      alert('Failure ' + response.data.message)
    else if (window.confirm('Success ' + response.data.message))
      window.location.reload();



    event.preventDefault()
  };

  return (
    <Container>
      <Form>
        <Row style={{ marginTop: " 1rem" }}>
          <Col md={5}>
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
                defaultValue={isNewCourse ? "" : courseDetails.name}
                placeholder="Course name"
                className="mb-2"
                onChange={handleChange}
              />
            </Form.Group>
            By
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
                  type="number"
                  size="sm"
                  name="coursePricePerHour"
                  defaultValue={
                    isNewCourse ? "" : courseDetails.coursePricePerHour
                  }
                  placeholder="0"
                  className="mb-2"
                  onChange={handleChange}
                  style={{ width: "90px" }}
                />
              </Form.Group>
              <Form.Group controlId='isFull'>
                <Form.Check
                  name='isFull'
                  type='checkbox'
                  id='isFullCheckbox'
                  label='Check if course if full'
                  checked={isNewCourse ? false : (courseDetails.isFull === true)}
                  onClick={handleChange}
                />
              </Form.Group>
            </Row>
            {isNewCourse ? 0 : courseDetails.rating}
            <i className="bi bi-star-fill" style={{ color: "#ffff00" }}></i>(
            {
              // Show the number of unreported reviews, TODO: check the correct way to get the unreported reviews
              isNewCourse
                ? 0
                : courseDetails.Reviews.filter(
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
            </Button>
            <Button variant="outline-danger" style={{ margin: "5px" }}>
              Cancel
            </Button>
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
                defaultValue={isNewCourse ? "" : courseDetails.description}
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

            {!isNewCourse &&
              <ListGroup variant="flush">
                {courseDetails.files.map((file) => (
                  <FileListItem file={file} isThisTutor={true} editMode={true} key={file.id} />
                ))}
              </ListGroup>
            }
            <Form.Group controlId="tutorFile">
              <Form.Label as="b">Upload new files to this course</Form.Label>
              <Form.Control
                name="files"
                type="file"
                onChange={handleChange}
                multiple
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default CourseDetailsForm;
