import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import apiEndPoints from "./ApiEndpoints"

function ReviewReportForm(props) {
  const [reportText, setReportText] = useState("")

  const handleChange = (event) => {
    setReportText(event.target.value)
  }

  const handleSubmit = (event) => {
    const response = apiEndPoints.reportReview(
      props.reviewID,
      reportText
    )
    if (!alert(response.data.message))
      window.location.reload()
    console.log("response: " + response)
    event.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="reportFormTextArea">
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Type your report."
          value={reportText}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit" variant="outline-dark">
        Submit
      </Button>
    </Form>
  )
}

export default ReviewReportForm
