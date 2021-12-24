import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return (
        <div className="container" style={{width:'100%'}}>
        <div className='footer-bottom'>
            <hr/>
            <p className='text-md-center'>&copy; Copyright {new Date().getFullYear()} - Fulda University of Applied Sciences. All Rights Reserved.</p>
        </div>
        </div>
    );
};

export default Footer;