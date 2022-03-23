import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import apiEndPoints from "./ApiEndpoints"
import * as yup from 'yup';

function ReviewReportForm(props) {
  const schema = yup.object().shape({
    reportText: yup.string().required("Report text is required"),
  });

  const [reportText, setReportText] = useState("")

  const handleChange = (event) => {
    setReportText(event.target.value)
  }

  const handleSubmit = async (event) => {
    await schema.validate({reportText: reportText}).then(async function (report) {
      await apiEndPoints.reportReview(
        props.reviewID,
        reportText
      ).then(function (response) {
        if (!alert(response.data.message))
          window.location.reload()
      })
      event.preventDefault()

    }).catch(function (err) {
      console.log(err);
      alert("Report is not valid, please enter valid data berfore submission!")
    });
    
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
