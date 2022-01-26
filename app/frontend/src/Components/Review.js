import React, { useState } from "react"
import { Button, Card, Modal } from "react-bootstrap"
import ReviewReportForm from "./ReviewReportForm"

function Review(props) {
  const status = localStorage.getItem("statusCode")
  const review = props.review

  const [reviewToReport, setreviewToReport] = useState(0)
  const [isReportFormModalOpen, setReportFormModalOpen] = useState(false)

  const handleReportModalClose = () => {
    setReportFormModalOpen(false)
  }

  const handleReportModalShow = () => {
    setReportFormModalOpen(true)
  }

  return (
    <Card className="mb-2">
      <Card.Body>
        {/* TODO: Add reviewer name from the backend */}
        <Card.Title>{"Student name"}</Card.Title>

        <Card.Subtitle>
          {/* TODO: Check if I should show the review creation date or update data */}
          <h6 className="text-muted">{review.createdAt}</h6>
          <div>
            {Array.from({ length: review.rating }, () => (
              <i className="bi bi-star-fill" style={{ color: "#ffff00" }} />
            ))}
            {Array.from({ length: 5 - Math.floor(review.rating) }, () => (
              <i className="bi bi-star" style={{ color: "#ffff00" }} />
            ))}
            ({review.rating})
          </div>
        </Card.Subtitle>

        <Card.Text>{review.ratingComments}</Card.Text>

        {
          status &&
          <Button variant="outline-danger"
            onClick={() => {
              setreviewToReport(review.id)
              handleReportModalShow()
            }}
          >Report</Button>
        }

        <Modal show={isReportFormModalOpen} onHide={handleReportModalClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              Please explain why you are reporting this review!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReviewReportForm reviewID={reviewToReport} />
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  )
}

export default Review