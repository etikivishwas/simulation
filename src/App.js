import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Subhero from './components/Subhero/Subhero';
import About from './components/About/About'; 
import Fail from './components/Fail/Fail';
import Success from './components/Success/Success';
import Course from './components/Course/Course';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Subhero />
      <About />
      <Fail />
      <Success />
      <Course />
      <Contact />
    </div>
  );
}

export default App;
