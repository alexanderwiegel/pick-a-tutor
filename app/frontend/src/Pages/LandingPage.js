import React from 'react';
import Header from '../Components/Header';
import Feature from '../Components/Feature';
import About from '../Components/About';
import aboutimg from '../images/Frame 19.png';
import Search from '../Components/Search';

const LandingPage = () => {
  return (
    <div className='App'>
      <Header />
      <Feature />
      <About image={aboutimg} title='Become an instructor' button='Teach Now' />
      <Search />
    </div>
  );
};

export default LandingPage;