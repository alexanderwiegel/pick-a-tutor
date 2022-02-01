import React from 'react';
import { useState, useEffect } from 'react';
import SearchComponent from '../Components/SearchComponent';
import CardComponent from '../Components/CardComponentSubject';
import apiEndPoints from '../Components/ApiEndpoints';
import { Container } from 'react-bootstrap';
import _ from 'lodash';
import CardComponentMyCourses from '../Components/CardComponentMyCourses';

const Home = () => {
  const [users, setUsers] = useState([])
  const [category, setCategory] = useState("course");
  const [courses, setCourses] = useState([])
  const [enrolledCourses, setEnrolledCourses] = useState([])

  const getUsers = async () => {
    const data = await apiEndPoints.getTutorData()
    setUsers(() => data.data)
    return users;
  };

  const getCourses = async (subject = "") => {
    const data = await apiEndPoints.getListofCourses(subject)
    setCourses(() => data.data.data)
  };
  const getEnrolledCourses = async () => {
    const data = await apiEndPoints.getEnrolledCourses()
    console.log("getEnrolledCourses data = ", data)
    setEnrolledCourses(() => data.data.data)
  };

  const _setCategory = (value) => {
    setCategory(() => value)
  }

  useEffect(() => {
    getCourses()
    getEnrolledCourses()
  }, []);


  return (

    <>
      <SearchComponent getUsers={getUsers} category={category} setCategory={_setCategory} getCourses={getCourses} />
      <Container><h1>My Courses</h1><hr /></Container>
      <Container style={{ overflowX: 'scroll' }}>
        <Container style={{ display: 'flex' }}>
          {
            (enrolledCourses && enrolledCourses.length > 0) &&
            enrolledCourses.map((course, index) => (
              <CardComponentMyCourses course={course} />
            ))
          }
          {
            enrolledCourses.length === 0 &&
            <p>You are not enrolled in any course.</p>
          }
        </Container>
      </Container>
      <br />
      <Container><h1>Recommended Courses</h1><hr /></Container>
      <Container style={{ overflowX: 'scroll' }}>
        <Container style={{ display: 'flex' }}>
          {
            (courses && courses.length > 0) &&
            _.orderBy(courses, "rating", "desc").map((course, index) => (
              <CardComponent name={`${course.User?.firstName} ${course.User?.lastName}`} course={course} />
            ))
          }
        </Container>
      </Container>
      <br />
      <Container><h1>Recently added Courses</h1><hr /></Container>
      <Container style={{ overflowX: 'scroll' }}>
        <Container style={{ display: 'flex' }}>
          {
            (courses && courses.length > 0) &&
            _.orderBy(courses, "createdAt", "desc").map((course, index) => (
              <CardComponent name={`${course.User?.firstName} ${course.User?.lastName}`} course={course} />
            ))
          }
        </Container>
      </Container>
    </>
  );
};

export default Home;