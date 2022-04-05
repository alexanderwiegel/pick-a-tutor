import React, { useReducer } from "react"
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  Form,
} from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import apiEndPoints from "./ApiEndpoints"
import FileListItem from "../Components/FileListItem"
import CourseImage1 from "../images/course1.jpg"
import * as yup from "yup"

function CourseDetailsForm({ isNewCourse, courseDetails }) {
  const SUPPORTED_IMG_FORMATS =  ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
  var schema;
  if(isNewCourse) {
    schema = yup.object().shape({
      name: yup.string().required("Course Name is required"),
      description: yup.string().required("Course Name is required"),
      img: yup.mixed().test('fileType', "Unsupported File Format", value => (typeof value === 'undefined')? true: SUPPORTED_IMG_FORMATS.includes(value.type)), // if no image is uploaded return true, because it tries to validate the image even if there is no files selected
      isFull: yup.boolean(), 
      coursePricePerHour: yup.number().required().integer().min(0),
      files: yup.array().of(yup.string())
    })
  }else {
    schema = yup.object().shape({
      description: yup.string(),
      img: yup.mixed().test('fileType', "Unsupported File Format", value => (typeof value === 'undefined')? true: SUPPORTED_IMG_FORMATS.includes(value.type)), // if no image is uploaded return true, because it tries to validate the image even if there is no files selected
      isFull: yup.boolean(), 
      coursePricePerHour: yup.number().integer().min(0),
      files: yup.array().of(yup.string())
    })
  }

  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    }
  }
  const [formData, setFormData] = useReducer(formReducer, {})

  const handleChange = (event) => {
    //Create newFromData object to get all values, from the form on any change in the input fields
    let newFormData = {}
    newFormData.name = event.target.name
    switch (newFormData.name) {
      case "files":
        newFormData.value = Array.from(event.target.files)
        break
      case "img":
        newFormData.value = Array.from(event.target.files)[0]
        break
      case "isFull":
        newFormData.value = event.target.checked
        break
      default:
        newFormData.value = event.target.value
    }

    setFormData(newFormData)
  }


  const handleSubmit = async (event) => {
    console.log('in submit course details form')
    await schema.validate(formData).then(async function(formData){
      const response = isNewCourse
      ? await apiEndPoints.addNewCourse(formData)
      : await apiEndPoints.updateCourseDetails(courseDetails.id, formData)
    console.log("Submiteed course form details")
    console.log("response", response)
    if (response.data.message) {
      alert(response.data.message)
      window.location.reload() //Error : if not reloaded there is a error to be fixed!
      event.preventDefault()
    }
    }).catch(function (err) {
      console.log(err);
      alert("Course data is not valid, please enter valid data berfore submission!")
    });
   
  }

  const handleDeleteFile = async (fileToDeleteID) => {
    await apiEndPoints.deleteCourseFile(fileToDeleteID)
      .then(function (response) {
        if (!alert(response.data.message))
          window.location.reload()
      })
  }

  return (
    <Container>
      <Form>
        <Row style={{ marginTop: " 1rem" }}>
          <Col md={5}>
            <Image
              fluid="true"
              thumbnail="true"
              // TODO: Add image from the backend
              src={(courseDetails.img) ? `http://20.113.25.17:3001/api/downloadprofilefile?path=${courseDetails.img.filePath}` : CourseImage1}
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
              {//Disable the name input if this is not a new course
                (isNewCourse) ?
                  <Form.Control
                    type="text"
                    name="name"
                    defaultValue=""
                    placeholder="Course name"
                    className="mb-2"
                    onChange={handleChange}
                  /> :
                  <Form.Control
                    type="text"
                    name="name"
                    defaultValue={courseDetails.name}
                    placeholder="Course name"
                    className="mb-2"
                    onChange={handleChange}
                    disabled
                  />}
            </Form.Group>
            By
            <i>
              <a href={"/tutor/" + courseDetails.User.id}>
                {" " + courseDetails.User.firstName + " " + courseDetails.User.lastName}
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
                    isNewCourse ? 0 : courseDetails.coursePricePerHour
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
                  label='Check if course is full'
                  defaultChecked={isNewCourse ? false : (courseDetails.isFull === true)}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <br />
            <Button
              variant="outline-primary"
              style={{ margin: "5px" }}
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button variant="outline-danger" style={{ margin: "5px" }} href={isNewCourse ? `/tutor/${courseDetails.User.id}` : `/course/${courseDetails.id}`}>
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
                  <FileListItem file={file} isThisTutor={true} editMode={true} key={file.id} onDelete={handleDeleteFile} />
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
  )
}

export default CourseDetailsForm
