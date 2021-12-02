import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Details from './Components/Detail';
import PageTemplate from './Components/PageTemplate';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

ReactDOM.render(
  <PageTemplate>
  <Router>
          <Routes>
            <Route path = '/' element = { <App /> } />
            <Route path = '/detail' element = { <Details /> } />
          </Routes>
        </Router>
        </PageTemplate>,
        document.getElementById('root')
       
  
);