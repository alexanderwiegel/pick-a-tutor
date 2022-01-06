import React from 'react';

import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import PageTemplate from './Components/PageTemplate';
import Home from './Pages/Home';
import Details from './Components/Detail';
import Users from './Pages/Users';
import Approvals from './Pages/Approvals';
import Messages from './Pages/Messages';

import { BrowserRouter as Router, Routes, Route, Navigate, Switch, useLocation } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PageTemplate><Approvals /></ PageTemplate>} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/home' element={<PageTemplate><Home /></PageTemplate>} />
        <Route exact path='/detail' element={<PageTemplate><Details /></PageTemplate>} />
        <Route exact path='/users' element={<PageTemplate><Users /></PageTemplate>} />
        <Route exact path='/approvals' element={<PageTemplate><Approvals /></PageTemplate>} />
        <Route exact path='/messages' element={<PageTemplate><Messages /></PageTemplate>} />
      </Routes>
    </Router>
  );
}

export default App;
