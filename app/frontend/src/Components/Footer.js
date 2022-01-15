import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="container" style={{ position: 'absolute', left: 0, bottom: 0, right: 0 }}>
      <div className='footer-bottom'>
        <hr />
        <p className='text-md-center'>&copy; Copyright 2021 - {new Date().getFullYear()} - Fulda University of Applied Sciences. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;