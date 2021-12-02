import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import aboutimg from './images/Frame 19.png';
import aboutimg2 from './images/background.png';
import Search from './Components/Search';
import Navbar from './Components/Navbar';


function App() {
  return (
      <div className='App'>
        <Navbar />
        <Header />
        <Feature />
        <About image = {aboutimg} title = 'Come with all your study needs.' button = 'Get the App' />
        <Search />
      </div>
  );
}

export default App;
