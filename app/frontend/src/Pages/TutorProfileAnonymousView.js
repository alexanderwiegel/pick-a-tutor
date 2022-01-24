import React from "react";
import { Container, Row, Col, ListGroup, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CourseCard from "../Components/CourseCard";
import apiEndPoints from "../Components/ApiEndpoints";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { th } from "date-fns/locale";
import PageTemplate from "../Components/PageTemplate";

function TutorProfileAnonymousView(props) {
    const tutor = {
        id: 1,
        firstName: "Tutor",
        lastName: "Name",
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

    const [loading, setLoading] = useState(true);
    const [tutorProfile, setTutorProfile] = useState(tutor);
    const [courses, setTutorCourses] = useState([]);
    const {id} = useParams();

    const getTutorCourses = async (tutorID) => {
        const tutorCoursesData =  await apiEndPoints.getTutorCourses(tutorID);
        const tutorProfileData =  tutorCoursesData.data.data[0].User;
        console.log(tutorCoursesData);
        console.log("Tutor " + tutorID + " profile loaded, result: ");
        console.log(tutorCoursesData);
        console.log(tutorProfileData);
        setTutorCourses(tutorCoursesData.data.data);
        setTutorProfile(tutorProfileData);
        
        
    };

    

   /*  useEffect(() => {
      setTimeout(() => {
        getTutorProfile();
        setTimeout(() => {
          setLoading(preVal => false)
        }, 200)
      }, 500)
    }, []);
 */

    /* useEffect(() => {
      console.log("effect ran");
      getTutorCourses(id);
    }, []); */
    

    return (
      tutorProfile &&  <Container>
            <Row style={{ marginTop: " 1rem" }}>
                <Col md={5}>
                    <Image
                        src={tutor.img}
                        fluid={true}
                        thumbnail={true}
                        className="floatRight"
                        alt="tutor image"
                        style={{ height: "400px", width: "600px" }}
                    />
                </Col>
                <Col md={7} className="flexColumn">
                    <h3>{tutorProfile.firstName + " " + tutorProfile.lastName}</h3>
                    <h6>
                        {tutor.rating}{" "}
                        <i
                            className="bi bi-star-fill"
                            style={{ color: "#ffff00" }}
                        />{" "}
                        ({tutor.numOfReviews})
                    </h6>
                </Col>
            </Row>
            <Row style={{ marginTop: " 1rem" }}>
                <Col>
                    <h3>Description</h3>
                    <p>{tutor.description}</p>
                </Col>
            </Row>
            <Row style={{ marginTop: " 1rem" }}>
                <Col>
                    <h3>Files</h3>
                    <ListGroup variant="flush">
                        {tutor.files.map((file) => (
                            <ListGroup.Item>
                                <a href="" download={file.path}>
                                    {file.name}
                                </a>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>

            <Row style={{ marginTop: " 1rem" }}>
                <h1>Courses</h1>
                <Container style={{ overflowX: "scroll" }}>
                    <Container style={{ display: "flex" }}>
                        {courses.map((course) => (
                            <CourseCard
                                tutorName={`${tutorProfile.firstName} ${tutorProfile.lastName}`}
                                course={course}
                            />
                        ))}
                    </Container>
                </Container>
            </Row>
        </Container>
    );
}

export default TutorProfileAnonymousView;
