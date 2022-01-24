import React from "react";
import { Card, Button} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function CourseCard(props) {
    return (
        <Card
            style={{
                width: "20rem",
                fontSize: "1rem",
                borderColor: "transparent",
                minWidth: "270px",
            }}
        >
            <div
                className="d-flex justify-content-center"
                style={{ paddingTop: "20px" }}
            >
                <Card.Img
                    variant="top"
                    src={course.img}
                    style={{
                        height: "150px",
                        width: "150px",
                        borderRadius: "5px",
                    }}
                />
            </div>
            <Card.Body>
                <Card.Title
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "1rem",
                    }}
                >
                    {course.Course.name}

                    <hr />
                    <p style={{ marginLeft: "2px", paddingLeft: "4px" }}>
                        {course.coursePricePerHour} €/h
                    </p>
                    <p style={{ paddingLeft: "4px" }} defaultValue="0.0">
                        {course.rating}
                        <i class="bi bi-star-fill" style={{ color: "gold" }} />
                        <p style={{ color: "#6a6f73", fontSize: "0.7rem" }} defaultValue="000">
                            ({course.numOfReviews})
                        </p>
                    </p>
                </Card.Title>
                <Card.Text
                    style={{
                        fontSize: "0.8rem",
                        color: "#6a6f73",
                        marginTop: "-40px",
                    }}
                >
                    meet {tutorName} <i class="bi bi-person-lines-fill" />
                </Card.Text>
                <Card.Text style={{ fontSize: "0.7rem", marginTop: "-10px" }}>
                    {course.Course.description}
                </Card.Text>
                <div className="d-flex justify-content-center">
                    <Button
                        style={{
                            backgroundColor: "#00b7ff",
                            width: "100%",
                            borderColor: "#00b7ff",
                        }}
                        href={"/course/" + course.id}
                    >
                        Course details
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CourseCard;
