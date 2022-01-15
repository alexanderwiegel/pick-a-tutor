import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FileCard from '../Components/FileCard';
import apiEndPoints from '../Components/ApiEndpoints';
import Spinner from 'react-bootstrap/Spinner'
import ReportedReviewCard from "../Components/ReportedReviewCard";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const Approvals = () => {
  const [tutors, setTutors] = useState([])
  const [loading, setLoading] = useState(true)
  const location = useLocation();

  const getTutors = async (subject = "") => {
    // TODO: replace this with getFilesToApprove
    const data = await apiEndPoints.getListofTutors(subject)
    setTutors(preVal => data.data)
  };

  useEffect(() => {
    setTimeout(() => {
      getTutors(location.state?.search);
      setTimeout(() => {
        setLoading(preVal => false)
      }, 200)
    }, 500)
  }, []);

  return (
    <div className='App'>
      <Container>
        {
          loading &&
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        }
        {
          !loading &&
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{tutors.length} Files</Accordion.Header>
              <Accordion.Body>
                {
                  tutors.length > 0 && tutors.map(tutor => {
                    return <Row>
                      <Col />
                      <Col>
                        <br></br>
                        <FileCard name={tutor.firstName + " " + tutor.lastName} files={tutor.Courses}></FileCard>
                      </Col>
                      <Col />
                    </Row>
                  })
                }
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>3 Reported reviews</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col />
                  <Col>
                    <ReportedReviewCard
                      courseName="Java for Beginners"
                      reviewer="Notsucha Niceguy"
                      reporter="Fairper Son"
                      reviewText="This course is ****"
                      reportComment="This review uses inappropriate language" />
                    <br></br>
                    <ReportedReviewCard
                      courseName="Java for Beginners"
                      reviewer="Notsucha Niceguy"
                      reporter="Fairper Son"
                      reviewText="Visit maliciouswebsite.com and earn $$$"
                      reportComment="Spam" />
                    <br></br>
                    <ReportedReviewCard
                      courseName="Java for Beginners"
                      reviewer="Notsucha Niceguy"
                      reporter="John Doe"
                      reviewText="Good course, but too repetitive."
                      reportComment="I don't like this review." />
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