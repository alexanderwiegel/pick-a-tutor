import React, { useEffect, useState } from "react"
import apiEndPoints from "../Components/ApiEndpoints"
import { useLocation } from "react-router-dom"
import CardComponent from "../Components/CardComponentSubject"
import CardComponentTutor from "../Components/CardComponentTutor"
import SearchComponent from "../Components/SearchComponent"
import { Container, Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap'
import Sort from "../Components/Sort"
import _, { split } from "lodash"
import "bootstrap-icons/font/bootstrap-icons.css"
import CardComponentTutorOfTheMonth from "../Components/CardComponentTutorOfTheMonth"
import RatingFilter from "../Components/RatingFilter"
import PriceFilter from "../Components/PriceFilter"


function Browse() {
  //#region constants and functions
  const [users, setUsers] = useState([])
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("course")
  const location = useLocation()
  const [starValue, setStarValue] = useState(0)
  const stars = [4, 3, 2, 1]
  const [priceFilter, setPriceFilter] = useState(0)
  const prices = ["5", "10", "15", "20", "20+"]
  const [minPrice, setMinPrice] = useState()
  const [maxPrice, setMaxPrice] = useState()
  const [searchKeyword, setSearchKeyword] = useState("")

  const getUsers = async (subject = "") => {
    const data = await apiEndPoints.getListofTutors(subject)
    setUsers(() => data.data.data)
  }

  const getCourses = async (subject = "") => {
    filterResults(subject)
  }

  const sortCourses = (sortby, order) => {
    setCourses(preVal => {
      if (sortby === "coursePricePerHour")
        return order === 'asc' ? _.orderBy(preVal, o => +o.coursePricePerHour, ['asc']) : _.orderBy(preVal, o => +o.coursePricePerHour, ['desc'])
      else
        return order === 'asc' ? _.orderBy(preVal, o => +o.rating, ['asc']) : _.orderBy(preVal, o => +o.rating, ['desc'])
    })
  }
  const sortUsers = (order) => {
    setUsers(preVal => {
      return order === 'asc' ? _.orderBy(preVal, o => +o.rating, ['asc']) : _.orderBy(preVal, o => +o.rating, ['desc'])
    })
  }

  const filterResults = async (keyword) => {
    if (category === "course") {
      const response = await apiEndPoints.getFilteredResult(keyword ? keyword : searchKeyword, minPrice, maxPrice, starValue)
      setCourses(() => response.data.data)
    } else {
      const response = await apiEndPoints.getFilteredTutor(searchKeyword, starValue)
      setUsers(() => response.data.data)
    }
  }

  const _setCategory = (value) => {
    setCategory(() => value)
  }

  const _setPriceRange = (value) => {
    setPriceFilter(() => value)
    const priceRange = split(value, "-")
    if (priceRange.length === 2) {
      setMinPrice(() => priceRange[0])
      setMaxPrice(() => priceRange[1])
    } else {
      setMinPrice(() => priceRange[20])
      setMaxPrice(() => undefined)
    }
  }

  const _setStartValue = (value) => {
    setStarValue((preVal) => value)
  }

  useEffect(() => {
    setTimeout(async () => {
      if (location.state?.search)
        setSearchKeyword(() => location.state?.search)
      if (location.state?.source === "/" || location.pathname === "/browse")
        filterResults(location.state?.search)
      if (location.state?.source === "/home") {
        _setCategory(location.state?.category)
        if (location.state?.category === "course") {
          const response = await apiEndPoints.getFilteredResult(location.state?.search)
          setCourses(() => response.data.data)
        } else {
          const response = await apiEndPoints.getFilteredTutor(location.state?.search)
          setUsers(() => response.data.data)
        }
      }
      setTimeout(() => {
        setLoading(() => false)
      }, 200)
    }, 500)
  }, [])
  //#endregion

  return (
    <>
      <SearchComponent getUsers={getUsers}
        getCourses={getCourses}
        category={category}
        setCategory={_setCategory}
        setUsers={setUsers}
        setSearchKeyword={setSearchKeyword} />
      <br />
      <label htmlFor="filter"
        className='hide'
        style={{ marginLeft: '15px' }}>
        <i className="bi bi-funnel-fill" />
      </label>
      <input type="checkbox" id="filter" name="filter" className='hide' />
      <Container>
        <div className="detail-page">
          <div className="side-bar">
            <br />
            <label htmlFor="filter" className='hide' style={{ marginLeft: '10px' }}><i class="bi bi-x-lg"></i></label>
            <br />
            <h4>Rating Filters</h4>
            <hr />
            {
              stars.map(value =>
                <RatingFilter value={value} starValue={starValue} handleOnChange={_setStartValue} key={value} />
              )
            }
            {
              category === "course" &&
              <>
                <h4>Price Filters</h4>
                <hr />
                {
                  prices.map(value =>
                    <PriceFilter value={value} priceFilter={priceFilter} handleOnChange={_setPriceRange} key={value} />
                  )
                }

                <Row className="g-2" style={{ fontSize: '10px' }}>
                  <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Min Price">
                      <Form.Control
                        placeholder="Min Price"
                        onChange={(e) => setMinPrice(() => e.currentTarget?.value)}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Max Price">
                      <Form.Control
                        placeholder="Max Price"
                        onChange={(e) => setMaxPrice(() => e.currentTarget?.value)}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
              </>
            }
            <br />
            <Container>
              <Row>
                <div className="col text-center">
                  <Button style={{ backgroundColor: '#00b7ff', borderColor: '#00b7ff', width: '100%' }} onClick={() => filterResults(undefined)}>Apply Filters</Button>
                </div>
              </Row>
            </Container>
            <br />
            <br />
          </div>
          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Sort sortCourses={sortCourses} sortUsers={sortUsers} category={category} />
            </div>
            <div className="main-content">
              <div className="wrapper" style={{ justifyContent: 'space-evenly' }}>
                {
                  loading ? <h1>Fetching data...</h1> :
                    <>
                      <CardComponentTutorOfTheMonth />
                      {

                        category === "tutor" && users.length > 0 ?
                          users.map(user => <CardComponentTutor tutor={user} name={user.firstName + " " + user.lastName} key={user.id} />) :
                          <h1>No tutor found</h1>
                            ||
                            category === "course" && courses.length > 0 ?
                            courses.map(course => <CardComponent course={course} name={course.User?.firstName + " " + course.User?.lastName} price={course.coursePricePerHour} key={course.id} />) :
                            <h1>No course found</h1>
                      }
                    </>
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Browse
