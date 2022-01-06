import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>

      <div className='name'>
        <h1><span>Pick-A-Tutor</span>
          <br></br>Go the extra mile</h1>
        <p className='details'>We strive to bring you the best tutors available near you.</p>
        <a href='' className='cv-btn' >Download</a>
      </div>
    </div>
  );
}

export default Header;