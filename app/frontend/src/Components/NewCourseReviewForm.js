import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import apiEndPoints from "./ApiEndpoints"

function NewCourseReviewForm({ courseID, tutorID }) {
  const [reviewText, setReviewText] = useState("")
  const [rating, setRating] = useState(0)

  const handleChange = (event) => {
    const target = event.target
    const value =
      target.type === "radio" ? parseInt(target.value, 10) : target.value
    const name = target.name

    console.log("Value from " + name + " is " + value)

    name === "reviewText" ? setReviewText(value) : setRating(value)
  }

  const handleSubmit = async (event) => {
    const review = {
      writerID: parseInt(localStorage.getItem("userID")),
      courseID: courseID,
      courseTutorID: tutorID,
      rating: rating,
      text: reviewText
    }

    const response = await apiEndPoints.addCourseReview(review)
    console.log("Submit review")
    console.log(review)
    console.log(response)

    if (!alert(response.data.message)) { window.location.reload() }
    event.preventDefault()
  }

  return (
    <Form >
      <Form.Group className="mb-3" controlId="reportFormTextArea">
        <div key="ratingRadiosGroup" className="mb-3">
          Rating: &nbsp;
          {[1, 2, 3, 4, 5].map((x) => (
            <Form.Check
              inline
              label={x}
              value={x}
              name="rating"
              type="radio"
              id={`ratingRadio-${x}`}
              onChange={handleChange}
              key={x}
            />
          ))}
          <i
            className="bi bi-star-fill"
            style={{
              color: "#ffff00",
            }}
          />{" "}
          stars
        </div>
        <Form.Control
          name="reviewText"
          as="textarea"
          rows={5}
          placeholder="Type your review."
          value={reviewText}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="outline-dark" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  )
}

export default NewCourseReviewForm
