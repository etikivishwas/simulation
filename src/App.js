import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Subhero from './components/Subhero/Subhero';
import About from './components/About/About'; 
import Fail from './components/Fail/Fail';
import Success from './components/Success/Success';
import Course from './components/Course/Course';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="App">
      <Navbar />
      <Hero onContactClick={scrollToContact} onLearnMoreClick={scrollToAbout} />
      <Subhero />
      <div ref={aboutRef}>
        <About />
      </div>
      <Fail />
      <Success />
      <Course />
      <Testimonials />
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
