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
import Footer from './components/Footer/Footer';
import MeetingForm from './components/MeetingForm/MeetingForm';
import { SignUpHero } from './components/SignUp/SignUpHero';

function App() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const courseRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCourse = () => {
    courseRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar />
      <Hero onContactClick={scrollToContact} onLearnMoreClick={scrollToAbout} />
      <Subhero />
      <SignUpHero />
      <div ref={aboutRef}>
        <About />
      </div>
      <Fail />
      <Success onExploreMore={scrollToCourse} />
      <div ref={courseRef}>
        <Course />
      </div>
      <MeetingForm />
      
      {/* <Testimonials /> */}
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;




