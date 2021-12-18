import React from 'react';
import Details from './Components/Detail';
import Login from './Components/Login';
import PageTemplate from './Components/PageTemplate';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate, Switch, useLocation } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Routes>
          <Route path = '/' element = { <PageTemplate><Home /></ PageTemplate> } />
          <Route exact path = '/login' element = { <Login /> } />
          <Route exact path = '/signup' element = { <SignUp /> } />
          <Route exact path = '/detail' element = { <PageTemplate><Details /></PageTemplate> } />
          <Route exact path = '/dashboard' element = { <PageTemplate><Dashboard /></PageTemplate> } />
        </Routes>
    </Router>
  );
}

export default App;
