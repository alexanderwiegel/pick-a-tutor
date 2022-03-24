import React, { useState } from "react"
import { Button, Card, Modal } from "react-bootstrap"
import { format } from "date-fns"
import ReviewReportForm from "./ReviewReportForm"
import apiEndPoints from "./ApiEndpoints"

function Review(props) {
  const status = localStorage.getItem("statusCode")
  const review = props.review
  const id = localStorage.getItem("userID")
  var count = 0

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
        <Card.Title>{review.student.firstName + " " + review.student.lastName}</Card.Title>
        <Card.Subtitle>
          <h6 className="text-muted">{format(new Date(review.createdAt), "dd.MM.yyyy kk:mm")}</h6>
          <div>
            {Array.from({ length: review.rating }, () => (
              <i className="bi bi-star-fill" style={{ color: "#ffff00" }} key={++count} />
            ))}
            {Array.from({ length: 5 - Math.floor(review.rating) }, () => (
              <i className="bi bi-star" style={{ color: "#ffff00" }} key={++count} />
            ))}
            ({review.rating})
          </div>
        </Card.Subtitle>
        <Card.Text>{review.ratingComments}</Card.Text>
        {
          (status && review.studentId == id) ?
            <Button variant="outline-danger"
              onClick={async () => {
                const data = await apiEndPoints.deleteReview(review.id)
                alert("Your review has been deleted successfully!")
                window.location.reload(false);
              }}
            >Delete</Button>
            : <Button variant="outline-danger"
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