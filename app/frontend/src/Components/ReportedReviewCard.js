import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { ButtonGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import apiEndPoints from "./ApiEndpoints"

function ReportedReviewCard({ course, reviewer, reporter, reviewText, reportComment, id, handleOnApproveOrReject }) {
  const deleteReview = async () => {
    await apiEndPoints.deleteReview(id).then(function () { handleOnApproveOrReject() })
  }

  const rejectReport = async () => {
    await apiEndPoints.rejectReport(id).then(function () { handleOnApproveOrReject() })
  }

  return (
    <>
      <Card style={{ width: "20rem" }}>
        {/* TODO: ask others if it should obviously be a link or not */}
        <Card.Header>Review of <Link to={"/course/" + course.id}>{course.name}</Link></Card.Header>
        <Card.Body>
          <Card.Title>Review by {reviewer.firstName + " " + reviewer.lastName}:</Card.Title>
          <Card.Text>"{reviewText}"</Card.Text>
          <Card.Title>Comment by
            {
              reporter.isTutor ?
                // TODO: ask others if it should obviously be a link or not
                <Link to={"/tutor/" + reporter.id}> {reporter.firstName + " " + reporter.lastName}</Link> :
                " " + reporter.firstName + " " + reporter.lastName
            }
            :</Card.Title>
          <Card.Text>"{reportComment}"</Card.Text>
          <ButtonGroup className="d-flex">
            <Button onClick={() => deleteReview()} variant="danger">Delete review</Button>
            <Button onClick={() => rejectReport()} variant="warning">Reject report</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      <br />
    </>
  )
}

export default ReportedReviewCard