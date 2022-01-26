import React from "react"
import ReviewsFilter from "./ReviewsFilter"
import { Button } from "react-bootstrap"
import PricesFilter from "./PricesFilter"

class CoursesSearchFilters extends React.Component {
  render() {
    return (
      <Container fluid>
        <ReviewsFilter></ReviewsFilter>
        <PricesFilter></PricesFilter>
        <Button ></Button>
      </Container>
    )
  }
}

export default CoursesSearchFilters
