import React from 'react';
import Header from './Header';
import Feature from './Feature';
import About from './About';
import aboutimg from '../images/Frame 19.png';
import Search from './Search';
import Navbar from './Navbar';

const Home = () => {
    return (
      <div className='App'>
        <Header />
        <Feature />
        <About image = {aboutimg} title = 'Become an instructor' button = 'Teach Now' />
        <Search />
      </div>
    );
};

export default Home;