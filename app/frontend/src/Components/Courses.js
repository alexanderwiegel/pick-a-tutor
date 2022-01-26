import React from "react"
import ReviewsFilter from "./ReviewsFilter"
import PricesFilter from "./PricesFilter"
import { Button, Container, Row, Col } from "react-bootstrap"

class Courses extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            {/* Search filters */}
            <Col md={3}>

              <ReviewsFilter></ReviewsFilter>
              <PricesFilter></PricesFilter>
              <Button variant="primary" style={{ margin: "10px" }}>Apply</Button>
            </Col>

            {/* Search Results */}
            <Col md={9}></Col>
            <div className="row">
              <div className="col-md-3 order-md-first"></div>
              <div className="col-md-9 order-md-last"></div>
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Courses
