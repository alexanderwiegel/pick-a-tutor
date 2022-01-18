import React, { useEffect, useState } from "react";
import apiEndPoints from "../Components/ApiEndpoints";
import { useLocation } from "react-router-dom";
import CardComponent from "../Components/CardComponentSubject";
import CardComponentTutor from "../Components/CardComponentTutor";
import SearchComponent from "../Components/SearchComponent";
import { Container, ToggleButton, Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap';
import Sort from "../Components/Sort";
import _ from "lodash";
import "bootstrap-icons/font/bootstrap-icons.css";

function Browse(props) {
  const [users, setUsers] = useState([])
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("course")
  const location = useLocation();
  const [starValue, setStarValue] = useState(0)
  const [priceFilter, setPriceFilter] = useState(0)

  const getUsers = async (subject = "") => {
    const data = await apiEndPoints.getListofTutors(subject)
    console.log('users ', data.data.data)
    setUsers(preVal => data.data.data)
  };

  const getCourses = async (subject = "") => {
    const data = await apiEndPoints.getListofCourses(subject)
    console.log('courses hello ', data.data.data)
    setCourses(preVal => data.data.data)
  };

  const sortCourses = (sortby, order) => {
    setCourses(preVal => {
      if (sortby === "coursePricePerHour")
        return order === 'asc' ? _.orderBy(preVal, o => +o.coursePricePerHour, ['asc']) : _.orderBy(preVal, o => +o.coursePricePerHour, ['desc'])
      else
        return order === 'asc' ? _.orderBy(preVal, o => +o.rating, ['asc']) : _.orderBy(preVal, o => +o.rating, ['desc'])
    })
  }

  // const getResults = asnyc() =>{
  //   const data = await apiEndPoints.getFilterResults()
  // }

  const _setCategory = (value) => {
    setCategory(preVal => value)
  }

  useEffect(() => {
    setTimeout(() => {
      getUsers(location.state?.search);
      setTimeout(() => {
        setLoading(preVal => false)
      }, 200)
    }, 500)
  }, []);

  return (
    <>
      {/* {console.log('price = ', priceFilter, "star = ", starValue)} */}
      <SearchComponent getUsers={getUsers}
        getCourses={getCourses}
        category={category}
        setCategory={_setCategory}
        setUsers={setUsers} />
      <br />
      <label for="filter"
        className='hide'
        style={{ marginLeft: '15px' }}>
        <i class="bi bi-funnel-fill" />
      </label>
      <input type="checkbox" id="filter" name="filter" className='hide' />
      <Container>
        <div className="detail-page">
          <div className="side-bar">
            <br />
            <label for="filter" className='hide' style={{ marginLeft: '10px' }}><i class="bi bi-x-circle-fill" style={{ height: '20px', width: '20px' }}></i></label>
            <br />
            <h3>Rating Filters</h3>
            <hr />


            <ToggleButton
              style={{ backgroundColor: starValue == 4 ? "#00b7ffa1" : "transparent", color: starValue == 4 ? "#ffffff" : "black" }}
              id="4 star"
              type="checkbox"
              variant="light"
              value="4"
              onChange={(e) => setStarValue(e.currentTarget.value)}
            >
              <i class="bi bi-star-fill" style={{ color: 'gold' }}></i>
              <i class="bi bi-star-fill" style={{ color: 'gold' }}></i>
              <i class="bi bi-star-fill" style={{ color: 'gold' }}></i>
              <i class="bi bi-star-fill" style={{ color: 'gold' }}></i>
              <i class="bi bi-star"></i> & More
            </ToggleButton>
            <br />
            <br />

            <ToggleButton
              style={{ backgroundColor: starValue == 3 ? "#00b7ffa1" : "transparent", color: starValue == 3 ? "#ffffff" : "black" }}
              id="3 star"
              type="checkbox"
              variant="light"
              value="3"
              onChange={(e) => setStarValue(e.currentTarget.value)}
            >
              <i class="bi bi-star-fill" style={{ color: 'gold' }}></i>
              <i class="bi bi-star-fill" style={{ color: 'gold' }}></i>
              <i class="bi bi-star-fill" style={{ color: 'gold' }}></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i> & More
            </ToggleButton>

            <br />
            <br />

            <ToggleButton
              style={{ backgroundColor: starValue == 2 ? "#00b7ffa1" : "transparent", color: starValue == 2 ? "#ffffff" : "black" }}
              id="2 star"
              type="checkbox"
              variant="light"
              value="2"
              onChange={(e) => setStarValue(e.currentTarget.value)}
            >
              <i class="bi bi-star-fill" style={{ color: 'gold' }}></i>
              <i class="bi bi-star-fill" style={{ color: 'gold' }}></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i> & More
            </ToggleButton>

            <br />
            <br />


            <ToggleButton
              style={{ backgroundColor: starValue == 1 ? "#00b7ffa1" : "transparent", color: starValue == 1 ? "#ffffff" : "black" }}
              id="1 star"
              type="checkbox"
              variant="light"
              value="1"
              onChange={(e) => setStarValue(e.currentTarget.value)}
            >
              <i class="bi bi-star-fill" style={{ color: 'gold' }}></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i> & More
            </ToggleButton>

            <br />
            <br />
            <h3>Price Filters</h3>
            <hr />

            <ToggleButton
              style={{ backgroundColor: priceFilter == 5 ? "#00b7ffa1" : "transparent", color: priceFilter == 5 ? "#ffffff" : "black" }}
              id="5 Euro"
              type="checkbox"
              variant="light"
              value="5"
              onChange={(e) => setPriceFilter(e.currentTarget.value)}
            >
              0 - 5 €
            </ToggleButton>

            <br />
            <br />

            <ToggleButton
              style={{ backgroundColor: priceFilter == 10 ? "#00b7ffa1" : "transparent", color: priceFilter == 10 ? "#ffffff" : "black" }}
              id="10 Euro"
              type="checkbox"
              variant="light"
              value="10"
              onChange={(e) => setPriceFilter(e.currentTarget.value)}
            >
              5 - 10 €
            </ToggleButton>

            <br />
            <br />

            <ToggleButton
              style={{ backgroundColor: priceFilter == 15 ? "#00b7ffa1" : "transparent", color: priceFilter == 15 ? "#ffffff" : "black" }}
              id="15"
              type="checkbox"
              variant="light"
              value="15"
              onChange={(e) => setPriceFilter(e.currentTarget.value)}
            >
              10 - 15 €
            </ToggleButton>

            <br />
            <br />

            <ToggleButton
              style={{ backgroundColor: priceFilter == 20 ? "#00b7ffa1" : "transparent", color: priceFilter == 20 ? "#ffffff" : "black" }}
              id="20 Euro"
              type="checkbox"
              variant="light"
              value="20"
              onChange={(e) => setPriceFilter(e.currentTarget.value)}
            >
              15 - 20 €
            </ToggleButton>

            <br />
            <br />

            <ToggleButton
              style={{ backgroundColor: priceFilter == '20+' ? "#00b7ffa1" : "transparent", color: priceFilter == '20+' ? "#ffffff" : "black" }}
              id="20 + Euro"
              type="checkbox"
              variant="light"
              value="20+"
              onChange={(e) => setPriceFilter(e.currentTarget.value)}
            >
              20+ €
            </ToggleButton>
            <br />
            <br />
            <Row className="g-2" style={{ fontSize: '10px' }}>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Min Price">
                  <Form.Control placeholder="Min Price" />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Max Price">
                  <Form.Control placeholder="Max Price" />
                </FloatingLabel>
              </Col>
            </Row>
            <br />
            <Container>
              <Row>
                <div class="col text-center">
                  {/* onClick={getResults()} */}
                  <Button style={{ backgroundColor: '#00b7ff', borderColor: '#00b7ff', width: '100%' }}>Apply Filters</Button>
                </div>
              </Row>
            </Container>
            <br />
            <br />
          </div>
          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Sort sortCourses={sortCourses} />
            </div>
            <div className="main-content">
              <div className="wrapper" style={{ justifyContent: 'space-evenly' }}>
                {
                  loading &&
                  <h1>Fetching data...</h1>
                }
                {
                  (category === "tutor" && users.length > 0 && !loading) &&
                  users.map(user => <CardComponentTutor tutor={user} name={user.firstName} />
                  )
                }

                {
                  (category === "course" && courses.length > 0 && !loading) &&
                  courses.map(course => <CardComponent course={course} name={course.User.firstName} price={course.coursePricePerHour} searched_name={"madan"} />)
                }
                {
                  (category === "tutor" && users.length === 0 && !loading) &&
                  <h1>No tutor found</h1>
                }
                {
                  (category === "course" && courses.length === 0 && !loading) &&
                  <h1>No course found</h1>
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Browse;
