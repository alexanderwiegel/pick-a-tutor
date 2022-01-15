import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class TutorProfile extends React.Component {
    render() {
        const tutor = {
            id: 1,
            name: "Tutor Name",
            link: "/tutors/3434",
            img: "https://pngimg.com/uploads/teacher/teacher_PNG24.png",
            rating: 4.0,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, diam nec accumsan egestas, odio nisl tempus dolor, vitae aliquam dui nunc eget ipsum. Aenean vitae est maximus, aliquam ligula non, placerat lacus. Nunc varius eleifend diam nec luctus. Fusce quis condimentum diam. Maecenas viverra condimentum ipsum et feugiat. Donec eget tortor vitae nisi vulputate pellentesque. Pellentesque vel nisi accumsan, faucibus lacus eu, ultrices eros. Integer mattis odio eu egestas fermentum. Donec tempor, metus ut gravida pulvinar, erat nisi fermentum mauris, at pharetra enim arcu eu nunc. Nullam posuere eleifend leo id lacinia. Suspendisse accumsan, arcu in sodales congue, ex dolor gravida sapien, quis posuere turpis mi sed lorem. Nam a nibh sed augue bibendum consectetur. Aliquam feugiat placerat ex ut auctor. ",
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
                        <h3>{tutor.name}</h3>
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
                        <ul className="list-group list-group-flush">
                            <a
                                href=""
                                download="file.pdf"
                                className="list-group-item"
                            >
                                File1.pdf
                            </a>
                            <a
                                href=""
                                download="file.pdf"
                                className="list-group-item"
                            >
                                File2.pdf
                            </a>
                            <a
                                href=""
                                download="file.pdf"
                                className="list-group-item"
                            >
                                File3.pdf
                            </a>
                            <a
                                href=""
                                download="file.pdf"
                                className="list-group-item"
                            >
                                File4.pdf
                            </a>
                            <a
                                href=""
                                download="file.pdf"
                                className="list-group-item"
                            >
                                File5.pdf
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="row mb-2">
                    <h3>Courses</h3>
                    <div className="overflow-scroll">
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item">
                                <div class="card" style={{ width: "18rem" }}>
                                    <img
                                        src="https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg"
                                        class="card-img-top"
                                        alt="..."
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">Course Name</h5>
                                        <p class="card-text">
                                            Course description
                                        </p>
                                        <a href="#" class="btn btn-outline-primary">
                                            View course
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="card" style={{ width: "18rem" }}>
                                    <img
                                        src="https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg"
                                        class="card-img-top"
                                        alt="..."
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">Course Name</h5>
                                        <p class="card-text">
                                            Course description
                                        </p>
                                        <a href="#" class="btn btn-outline-primary">
                                            View course
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="card" style={{ width: "18rem" }}>
                                    <img
                                        src="https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg"
                                        class="card-img-top"
                                        alt="..."
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">Course Name</h5>
                                        <p class="card-text">
                                            Course description
                                        </p>
                                        <a href="#" class="btn btn-outline-primary">
                                            View course
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="card" style={{ width: "18rem" }}>
                                    <img
                                        src="https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg"
                                        class="card-img-top"
                                        alt="..."
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">Course Name</h5>
                                        <p class="card-text">
                                            Course description
                                        </p>
                                        <a href="#" class="btn btn-outline-primary">
                                            View course
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="card" style={{ width: "18rem" }}>
                                    <img
                                        src="https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg"
                                        class="card-img-top"
                                        alt="..."
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">Course Name</h5>
                                        <p class="card-text">
                                            Course description
                                        </p>
                                        <a href="#" class="btn btn-outline-primary">
                                            View course
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="card" style={{ width: "18rem" }}>
                                    <img
                                        src="https://www.videolab.ae/wp-content/uploads/2017/12/Course-Thumbnail-2.jpg"
                                        class="card-img-top"
                                        alt="..."
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">Course Name</h5>
                                        <p class="card-text">
                                            Course description
                                        </p>
                                        <a href="#" class="btn btn-outline-primary">
                                            View course
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TutorProfile;
