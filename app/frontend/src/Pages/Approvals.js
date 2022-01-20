import React, { useEffect, useState } from "react";
import FileCard from '../Components/FileCard';
import apiEndPoints from '../Components/ApiEndpoints';
import ReportedReviewCard from "../Components/ReportedReviewCard";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'

const Approvals = () => {
  const [pFiles, setPFiles] = useState([])
  const [cFiles, setCFiles] = useState([])
  const [reportedReviews, setReportedReviews] = useState([])
  const [loading, setLoading] = useState(true)

  const getFiles = async () => {
    const pData = await apiEndPoints.getProfileFilesToApprove()
    const cData = await apiEndPoints.getCourseFilesToApprove()
    setPFiles(() => pData.data.data);
    setCFiles(() => cData.data.data);
  };

  const getReportedReviews = async () => {
    const data = await apiEndPoints.getReportedReviews()
    setReportedReviews(() => data.data.data)
  }

  useEffect(() => {
    setTimeout(() => {
      getFiles();
      getReportedReviews();
      setTimeout(() => {
        setLoading(() => false)
      }, 200)
    }, 500)
  }, []);

  return (
    <div className='App'>
      <Container>
        {loading ?
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
          :
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Files: {pFiles.length + cFiles.length}</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col />
                  <Col>
                    {
                      pFiles.length > 0 && pFiles.map(upload =>
                        <FileCard user={upload.User} file={upload.fileTitle} key={upload.id}></FileCard>
                      )
                    }
                    {
                      cFiles.length > 0 && cFiles.map(upload =>
                        <FileCard user={upload.User} file={upload.fileTitle} key={upload.id}></FileCard>
                      )
                    }
                  </Col>
                  <Col />
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Reported reviews: {reportedReviews.length} </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col />
                  <Col>
                    {
                      reportedReviews.length > 0 && reportedReviews.map(reportedReview => {
                        return <ReportedReviewCard
                          courseName={reportedReview.TutorCourse.Course.name}
                          reviewer={reportedReview.student.firstName + " " + reportedReview.student.lastName}
                          reporter={reportedReview.reporter.firstName + " " + reportedReview.reporter.lastName}
                          reviewText={reportedReview.ratingComments}
                          reportComment={reportedReview.reportReviewComments}
                          id={reportedReview.id}
                          key={reportedReview.id}
                        />
                      })
                    }
                  </Col>
                  <Col />
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        }
      </Container>
    </div>
  )
};

export default Approvals;