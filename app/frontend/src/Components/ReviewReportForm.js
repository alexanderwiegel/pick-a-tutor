import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import apiEndPoints from "./ApiEndpoints"

function ReviewReportForm(props) {
  const [reportText, setReportText] = useState("")

  const handleChange = (event) => {
    setReportText(event.target.value)
  }

  const handleSubmit = async (event) => {
    await apiEndPoints.reportReview(
      props.reviewID,
      reportText
    ).then(function (response) {
      if (!alert(response.data.message))
        window.location.reload()
  })

    event.preventDefault()
  }

  return (
    <Form >
      <Form.Group className="mb-3" controlId="reportFormTextArea">
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Type your report."
          value={reportText}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="outline-dark" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  )
}

export default ReviewReportForm
