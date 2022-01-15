import React from 'react';

import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import PageTemplate from './Components/PageTemplate';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import Results from './Pages/Results';
import TutorProfile from './Pages/TutorProfile';
import Users from './Pages/Users';
import Approvals from './Pages/Approvals';
import Messages from './Pages/Messages';
import Chat from './Pages/Chat';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Routes, Route, Navigate, Switch, useLocation } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        {/* TODO: set this back to LandingPage or Home or TutorProfile or Approvals */}
        <Route path='/' element={<PageTemplate><LandingPage /></ PageTemplate>} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/home' element={<PageTemplate><Home /></PageTemplate>} />
        <Route exact path='/results' element={<PageTemplate><Results /><Footer /></PageTemplate>} />
        <Route exact path='/tutorProfile' element={<PageTemplate><TutorProfile /></PageTemplate>} />
        <Route exact path='/users' element={<PageTemplate><Users /></PageTemplate>} />
        <Route exact path='/approvals' element={<PageTemplate><Approvals /></PageTemplate>} />
        <Route exact path='/messages' element={<PageTemplate><Messages /></PageTemplate>} />
        <Route exact path='/chat' element={<PageTemplate><Chat /></PageTemplate>} />
      </Routes>
    </Router>
  );
}

export default App;
