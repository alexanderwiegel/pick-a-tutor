import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CourseCard from "../Components/CourseCard";
import { FileMedical } from "react-bootstrap-icons";

class TutorProfileStudentView extends React.Component {
    render() {
        const tutor = {
            id: 1,
            firstName: "Tutor",
            lastName: "Name",
            link: "/tutors/3434",
            img: "https://pngimg.com/uploads/teacher/teacher_PNG24.png",
            rating: 4.0,
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

        return (
            <div className="container">
                <div className="row mb-2">
                    <div className="col-md-5">
                        <img
                            src={tutor.img}
                            className="img-fluid img-thumbnail float-right"
                            alt="Responsive image"
                            style={{ height: "500px", width: "650px" }}
                        />
                    </div>
                    <div className="col-md-7">
                        <h3>{tutor.firstName + " " + tutor.lastName}</h3>
                        <br />
                        {tutor.rating}{" "}
                        <i
                            className="bi bi-star-fill"
                            style={{ color: "#ffff00" }}
                        ></i>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <h3>Description</h3>
                        <p>{tutor.description}</p>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <h3>Files</h3>
                        <ListGroup variant="flush">
                            {tutor.files.map((file) => (
                                <ListGroup.Item>
                                    <a
                                        href=""
                                        download={file.path}
                                        className="list-group-item"
                                    >
                                        {file.name}
                                    </a>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                </div>

                <div className="row mb-2">
                    <Container>
                        <h1>Courses</h1>
                        <hr />
                    </Container>
                    <Container style={{ overflowX: "scroll" }}>
                        <Container style={{ display: "flex" }}>
                            {tutor.courses.map((course) => (
                                <CourseCard
                                    tutorName={`${tutor.firstName} ${tutor.lastName}`}
                                    course={course}
                                />
                            ))}
                        </Container>
                    </Container>
                    <br />
                </div>
            </div>
        );
    }
}

export default TutorProfileStudentView;
