import React from 'react';
import Browse from './Pages/Browse';
import Login from './Pages/Login';
import PageTemplate from './Components/PageTemplate';
import LandingPage from './Pages/LandingPage';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Users from './Pages/Users';
import Approvals from './Pages/Approvals';
import Messages from './Pages/Messages';
import Chat from './Pages/Chat';
import { BrowserRouter as Router, Routes, Route, Navigate, Switch, useLocation } from 'react-router-dom';
import CourseDetailsStudentView from './Pages/CourseDetailsStudentView';
import TutorProfileTutorView from './Pages/TutorProfileTutorView';
import EditTutorProfile from './Pages/EditTutorProfile';
import CourseDetailsTutorView from './Pages/CourseDetailsTutorView';
import EditCourseDetails from './Pages/EditCourseDetails';
import AddCourseDetails from './Pages/AddCourseDetails';
import CourseDetailsAnonynmousView from './Pages/CourseDetailsAnonynmousView';
import TutorProfileAnonymousView from './Pages/TutorProfileAnonymousView';
import TutorProfileStudentView from './Pages/TutorProfileStudentView'


function App() {
  return (
    <Router>
        <Routes>

          <Route path='/' element={<PageTemplate><LandingPage /></ PageTemplate>} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/home' element={<PageTemplate><Home /></PageTemplate>} />
          <Route exact path='/browse' element={<PageTemplate><Browse /></PageTemplate>} />
          <Route exact path='/users' element={<PageTemplate><Users /></PageTemplate>} />
          <Route exact path='/approvals' element={<PageTemplate><Approvals /></PageTemplate>} />
          <Route exact path='/messages' element={<PageTemplate><Messages /></PageTemplate>} />
          <Route exact path='/chat' element={<PageTemplate><Chat /></PageTemplate>} />

          <Route path = '/courseav' element = {<PageTemplate><CourseDetailsAnonynmousView /></PageTemplate>} />
          <Route path = '/coursesv' element = { <PageTemplate><CourseDetailsStudentView /></ PageTemplate> } />
          <Route path = '/coursetv' element = { <PageTemplate><CourseDetailsTutorView /></ PageTemplate> } />
          <Route path = '/tutorav' element = { <PageTemplate><TutorProfileAnonymousView /></ PageTemplate> } />
          <Route path = '/tutorsv' element = { <PageTemplate><TutorProfileStudentView /></ PageTemplate> } />
          <Route path = '/tutortv' element = { <PageTemplate><TutorProfileTutorView /></ PageTemplate> } />
          <Route path = '/editTutorProfile' element = { <PageTemplate><EditTutorProfile /></ PageTemplate> } />
          <Route path = '/editCourseDetails' element = { <PageTemplate><EditCourseDetails /></ PageTemplate> } />
          <Route path = '/addCourse' element = { <PageTemplate><AddCourseDetails /></ PageTemplate> } />

        </Routes>
    </Router>
  );
}

export default App;
