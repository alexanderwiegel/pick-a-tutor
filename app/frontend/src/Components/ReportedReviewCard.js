import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import apiEndPoints from './ApiEndpoints';

function ReportedReviewCard({ courseName, reviewer, reporter, reviewText, reportComment, id }) {
  const deleteReview = async (reviewId) => {
    await apiEndPoints.deleteReview(reviewId)
  }

  const rejectReport = async (reviewId) => {
    await apiEndPoints.rejectReport(reviewId)
  }

  return (
    <>
      <Card style={{ width: '20rem' }}>
        <Card.Header>Review of <Link to="">{courseName}</Link></Card.Header>
        <Card.Body>
          <Card.Title>Review by <Link to="">{reviewer}</Link>:</Card.Title>
          <Card.Text>"{reviewText}"</Card.Text>
          <Card.Title>Comment by <Link to="">{reporter}</Link>:</Card.Title>
          <Card.Text>"{reportComment}"</Card.Text>
          <ButtonGroup className="d-flex">
            <Button onClick={() => deleteReview(id)} variant="danger">Delete review</Button>
            <Button onClick={() => rejectReport(id)} variant="warning">Reject report</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      <br />
    </>
  )
}

export default ReportedReviewCard;