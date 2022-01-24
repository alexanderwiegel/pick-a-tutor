import React, { useState, setState } from "react";
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
import { Plus, Trash } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";

function EditCourseDetails(props) {
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
  };
  const tutor_data = {
    id: 1,
    name: "Tutor Name",
    link: "/tutors/3434",
    img: "https://pngimg.com/uploads/teacher/teacher_PNG24.png",
    rating: 4.0,
    numOfReviews: 895,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, diam nec accumsan egestas, odio nisl tempus dolor, vitae aliquam dui nunc eget ipsum. Aenean vitae est maximus, aliquam ligula non, placerat lacus. Nunc varius eleifend diam nec luctus. Fusce quis condimentum diam. Maecenas viverra condimentum ipsum et feugiat. Donec eget tortor vitae nisi vulputate pellentesque. Pellentesque vel nisi accumsan, faucibus lacus eu, ultrices eros. Integer mattis odio eu egestas fermentum. Donec tempor, metus ut gravida pulvinar, erat nisi fermentum mauris, at pharetra enim arcu eu nunc. Nullam posuere eleifend leo id lacinia. Suspendisse accumsan, arcu in sodales congue, ex dolor gravida sapien, quis posuere turpis mi sed lorem. Nam a nibh sed augue bibendum consectetur. Aliquam feugiat placerat ex ut auctor. ",
    courses: [
      {
        id: 1,
        name: "Course Name",
        description:
          "Vastasque mutavissimus, transferebantque, obstinatamque pulsatque decavere trepidavissentque incensae",
        rating: 4.5,
        numOfReviews: 235,
        price: 20,
        img: "https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg",
      },
      {
        id: 1,
        name: "Course Name",
        description:
          "Vastasque mutavissimus, transferebantque, obstinatamque pulsatque decavere trepidavissentque incensae",
        rating: 4.5,
        numOfReviews: 235,
        price: 20,
        img: "https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg",
      },
      {
        id: 1,
        name: "Course Name",
        description:
          "Vastasque mutavissimus, transferebantque, obstinatamque pulsatque decavere trepidavissentque incensae",
        rating: 4.5,
        numOfReviews: 235,
        price: 20,
        img: "https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg",
      },
      {
        id: 1,
        name: "Course Name",
        description:
          "Vastasque mutavissimus, transferebantque, obstinatamque pulsatque decavere trepidavissentque incensae",
        rating: 4.5,
        numOfReviews: 235,
        price: 20,
        img: "https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg",
      },
      {
        id: 1,
        name: "Course Name",
        description:
          "Vastasque mutavissimus, transferebantque, obstinatamque pulsatque decavere trepidavissentque incensae",
        rating: 4.5,
        numOfReviews: 235,
        price: 20,
        img: "https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg",
      },
      {
        id: 1,
        name: "Course Name",
        description:
          "Vastasque mutavissimus, transferebantque, obstinatamque pulsatque decavere trepidavissentque incensae",
        rating: 4.5,
        numOfReviews: 235,
        price: 20,
        img: "https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg",
      },
      {
        id: 1,
        name: "Course Name",
        description:
          "Vastasque mutavissimus, transferebantque, obstinatamque pulsatque decavere trepidavissentque incensae",
        rating: 4.5,
        numOfReviews: 235,
        price: 20,
        img: "https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg",
      },
      {
        id: 1,
        name: "Course Name",
        description:
          "Vastasque mutavissimus, transferebantque, obstinatamque pulsatque decavere trepidavissentque incensae",
        rating: 4.5,
        numOfReviews: 235,
        price: 20,
        img: "https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg",
      },
    ],
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
  };

  const [isFileDeleteModalOpen, setIsFileDeleteModalOpen] = useState(false);
  const [course, setCourse] = useState(course_data);

  const { id } = useParams();

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    //ToDo: handle multiple files

    console.log("Value from " + name + " is " + value);

    /* 
          https://stackoverflow.com/questions/65733906/react-how-to-use-setstate-inside-functional-component
          and search for how to use setState inside functional component in React
          or maybe we can just change the propopery in course object https://stackoverflow.com/questions/37932434/how-to-change-a-property-on-an-object-without-mutating-it
          setCourse(...course, [name]: value)
         */
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
    console.log("Closed Clicked");
    this.setState({ isFileDeleteModalOpen: false });
  };

  const handleFileDeleteModalShow = () => {
    this.setState({ isFileDeleteModalOpen: true });
  };

  const handleFileDeleteClick = (event) => {
    alert("file deleted");
    handleFileDeleteModalClose();
    event.preventDefault();
  };

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
              <Form.Label as="b">Name: </Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={course.name}
                placeholder="please type the course name"
                className="mb-2"
                onChange={handleChange}
              />
            </Form.Group>
            By{" "}
            <i>
              <a href={tutor_data.link}>{tutor_data.name}</a>
            </i>
            <br />
            <Row style={{ marginLeft: "5px" }}>
              <Form.Group controlId="coursePrice">
                <Form.Label as="b">Price: €/Hour</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  name="rate"
                  defaultValue={course.rate}
                  placeholder="price"
                  className="mb-2"
                  onChange={handleChange}
                  style={{ width: "55px" }}
                />
              </Form.Group>
            </Row>
            {course.rating}{" "}
            <i className="bi bi-star-fill" style={{ color: "#ffff00" }}></i>
            <br />
            <Button
              type="submit"
              variant="outline-primary"
              style={{ margin: "5px" }}
              onClick={handleSubmit}
            >
              Save
            </Button>{" "}
            <Button variant="outline-primary" style={{ margin: "5px" }}>
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
                defaultValue={course.description}
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
                <ListGroup.Item>
                  <div className="d-flex justify-content-between">
                    <a href="" download={file.path}>
                      {file.name}
                    </a>
                    <Button
                      variant="outline-danger"
                      className=""
                      onClick={handleFileDeleteModalShow}
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
  );
}

export default EditCourseDetails;
