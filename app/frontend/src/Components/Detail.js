import React, { useEffect, useState } from "react";
import apiEndPoints from "./ApiEndpoints";
import { useLocation } from "react-router-dom";
import CardComponent from "./CardComponentSubject";
import CardComponentTutor from "./CardComponentTutor";
import SearchComponent from "./SearchComponent";
import {Container, Button,ToggleButton,ButtonGroup, Row, Col, FloatingLabel, Form} from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

function Details(props) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("course")
  const location = useLocation();
  const [starValue, setStarValue] = useState(0)
  const [priceFilter, setPriceFilter] = useState(0)

  const getUsers = async (subject = "") => {
    const data = await apiEndPoints.getListofTutors(subject)
    console.log('In detail ',data)
    setUsers(preVal => data.data)
  };

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
    {console.log('price = ',priceFilter,"star = ", starValue)}
    <SearchComponent getUsers={getUsers} category={ category } setCategory = { _setCategory }/>
    <br/>
    <label for="filter" className='hide' style={{marginLeft:'15px'}}><i class="bi bi-funnel-fill"/></label>
    <input type="checkbox" id="filter" name="filter" className='hide'/>
    <Container>
    <div className="detail-page">
      <div className="side-bar">
        <label for="filter" className='hide'><i class="bi bi-x-lg" /></label>
        <h3>Rating Filters</h3>
        <hr/>
        <ButtonGroup className="mb-2">
        <ToggleButton
          id="4 star"
          type="checkbox"
          variant="light"
          value="4"
          onChange={(e) => setStarValue(e.currentTarget.value)}
        >
          <i class="bi bi-star-fill" style={{color:'gold'}}></i>
        <i class="bi bi-star-fill" style={{color:'gold'}}></i>
        <i class="bi bi-star-fill" style={{color:'gold'}}></i>
        <i class="bi bi-star-fill" style={{color:'gold'}}></i>
        <i class="bi bi-star"></i> & More
        </ToggleButton>
      </ButtonGroup>
      <br />
       <ButtonGroup className="mb-2">
        <ToggleButton
          id="3 star"
          type="checkbox"
          variant="light"
          value="3"
          onChange={(e) => setStarValue(e.currentTarget.value)}
        >
          <i class="bi bi-star-fill" style={{color:'gold'}}></i>
        <i class="bi bi-star-fill" style={{color:'gold'}}></i>
        <i class="bi bi-star-fill" style={{color:'gold'}}></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i> & More
        </ToggleButton>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="2 star"
          type="checkbox"
          variant="light"
          value="2"
          onChange={(e) => setStarValue(e.currentTarget.value)}
        >
          <i class="bi bi-star-fill" style={{color:'gold'}}></i>
        <i class="bi bi-star-fill" style={{color:'gold'}}></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i> & More
        </ToggleButton>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="1 star"
          type="checkbox"
          variant="light"
          value="1"
          onChange={(e) => setStarValue(e.currentTarget.value)}
        >
          <i class="bi bi-star-fill" style={{color:'gold'}}></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i> & More
        </ToggleButton>
      </ButtonGroup>
      <br />
      <br />
      <h3>Price Filters</h3>
      <hr/>
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="5 Euro"
          type="checkbox"
          variant="light"
          value="5"
          onChange={(e) => setPriceFilter(e.currentTarget.value)}
        >
        0 - 5 €
        </ToggleButton>
      </ButtonGroup>
      <br/>
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="10 Euro"
          type="checkbox"
          variant="light"
          value="10"
          onChange={(e) => setPriceFilter(e.currentTarget.value)}
        >
        5 - 10 €
        </ToggleButton>
      </ButtonGroup>
      <br/>
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="15"
          type="checkbox"
          variant="light"
          value="15"
          onChange={(e) => setPriceFilter(e.currentTarget.value)}
        >
        10 - 15 €
        </ToggleButton>
      </ButtonGroup>
      <br/>
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="20 Euro"
          type="checkbox"
          variant="light"
          value="20"
          onChange={(e) => setPriceFilter(e.currentTarget.value)}
        >
        15 - 20 €
        </ToggleButton>
      </ButtonGroup>
      <br/>
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="20 + Euro"
          type="checkbox"
          variant="light"
          value="20"
          onChange={(e) => setPriceFilter(e.currentTarget.value)}
        >
        20+ €
        </ToggleButton>
      </ButtonGroup>
      <Row className="g-2" style={{fontSize:'10px'}}>
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
      </div>
      <div className="main-content">
        <div className="wrapper" style={{justifyContent:'space-evenly'}}>
          {
            loading &&
              <h1>Fetching data...</h1>
          }
          
          { (users.length > 0 && !loading) && 
              users.map(user => {
                
                if(category === "course")
                  return <CardComponent courses={ user.Courses } 
                                    name={ user.firstName } 
                                    searched_name={location.state?.search} />
                return <CardComponentTutor courses={ user } 
                                    name={ user.firstName } 
                                    searched_name={location.state?.search} />
                }
              )
          }
          {
            (users.length === 0 && !loading) &&
              <h1>No data found</h1>       
          }
        </div>
      </div>
    </div>
    </Container>
    </>
  );
}

export default Details;
