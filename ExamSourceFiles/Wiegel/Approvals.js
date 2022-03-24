import React, { useEffect, useState } from "react"
import FileCard from "../Components/FileCard"
import apiEndPoints from "../Components/ApiEndpoints"
import ReportedReviewCard from "../Components/ReportedReviewCard"
import { Accordion, Col, Container, Row } from "react-bootstrap"

const Approvals = () => {
  //#region constants and functions
  const [pFiles, setPFiles] = useState([])
  const [cFiles, setCFiles] = useState([])
  const [reportedReviews, setReportedReviews] = useState([])

  const getFiles = async () => {
    const pData = await apiEndPoints.getProfileFilesToApprove()
    const cData = await apiEndPoints.getCourseFilesToApprove()
    setPFiles(() => pData.data.data)
    setCFiles(() => cData.data.data)
  }

  const getReportedReviews = async () => {
    const data = await apiEndPoints.getReportedReviews()
    setReportedReviews(() => data.data.data)
  }

  useEffect(() => {
    getFiles()
    getReportedReviews()
  }, [])
  //#endregion

  const removeFromState = (objectID, objectType) => {
    switch (objectType) {
      case "pFile":
        const newPFiles = pFiles.filter((pFile) => pFile.id != objectID)
        setPFiles(newPFiles)
        break

      case "cFile":
        const newCFiles = cFiles.filter((cFile) => cFile.id != objectID)
        setCFiles(newCFiles)
        break

      case "reportedReview":
        const newReportedReviews = reportedReviews.filter(
          (reportedReview) => reportedReview.id != objectID
        )
        setReportedReviews(newReportedReviews)
        break

      default:
        console.log(`undefined remove object ${objectID} from ${objectType}s`)
    }
  }

  return (
    <div className="App">
      <Container>
        {<Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Files: {pFiles.length + cFiles.length}</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col />
                <Col>
                  {
                    pFiles.length > 0 && pFiles.map(upload =>
                      <FileCard
                        user={upload.User}
                        file={upload}
                        key={upload.id}
                        handleOnApproveOrReject={() => removeFromState(upload.id, "pFile")}
                      />
                    )
                  }
                  {
                    cFiles.length > 0 && cFiles.map(upload =>
                      <FileCard
                        user={upload.User}
                        file={upload}
                        key={upload.id}
                        handleOnApproveOrReject={() => removeFromState(upload.id, "cFile")}
                      />
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
                        course={reportedReview.TutorCourse.Course}
                        reviewer={reportedReview.student}
                        reporter={reportedReview.reporter}
                        reviewText={reportedReview.ratingComments}
                        reportComment={reportedReview.reportReviewComments}
                        id={reportedReview.id}
                        key={reportedReview.id}
                        handleOnApproveOrReject={() => removeFromState(reportedReview.id, "reportedReview")}
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
}

export default Approvals