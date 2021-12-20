import React from 'react';
import Navbar from './Navbar';

function Header () {
    return(
        <div id='main'>
            
            <div className='name'>
                <h1>New to <span>Pick A Tutor</span>? Lucky you.</h1>
                <p className='details'>We strive to bring you the best tutors available near you, with their broad selection of offered courses.</p>
                <a href = '/signup' className='cv-btn' style={{textDecoration:'none', width:'30%'}} >SignUp Now</a>
            </div>
        </div>
    );
}

export default Header;