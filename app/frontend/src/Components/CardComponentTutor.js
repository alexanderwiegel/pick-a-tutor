import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";



function CardComponentTutor({ name, courses, searched_name="" }) {
    console.log('courses = ',courses)
    return (
        <Card
            style={{
                fontSize: "1rem",
                borderColor: "transparent",
            }}
        >
            <div
                className="d-flex justify-content-center"
                style={{ paddingTop: "20px" }}
            >
                <Card.Img
                    variant="top"
                    src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
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
                    <p>{name}</p>

                    <hr />
                    
                    <p style={{ paddingLeft: "4px" }}>
                        4.5
                        <i class="bi bi-star-fill" style={{ color: "gold" }} />
                        <p style={{color:"#6a6f73",fontSize:'0.7rem'}}>(15.235)</p>
                    </p>
                </Card.Title>
                <Card.Text
                    style={{
                        fontSize: "0.8rem",
                        color: "#6a6f73",
                        marginTop: "-40px",
                        display:'flex'
                    }}
                >
                    {/* {courses.map((course) => (
                        <p style={{ paddingLeft: "2px", fontWeight: "bold" }}>
                            {course.name}
                        </p>
                    ))} */}
                </Card.Text>
                <Card.Text style={{fontSize:'0.7rem',marginTop:'-10px'}}>
                    {/* {courses.map((course) =>
                        course.name.toLowerCase() ===
                        searched_name.toLowerCase() ? (
                            <p>{course.description}</p>
                        ) : (
                            " "
                        )
                    )} */}
                </Card.Text>
                <div className="d-flex justify-content-center">
                    <Button
                        style={{ backgroundColor: "#00b7ff", width: "100%", borderColor:"#00b7ff" }}
                    >
                        Meet {name}
                    </Button>
                </div>
            </Card.Body>
        </Card> 
    );}

export default CardComponentTutor;
