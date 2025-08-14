import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Subhero from './components/Subhero/Subhero';
import About from './components/About/About'; 
import Fail from './components/Fail/Fail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Subhero />
      <About />
      <Fail />
    </div>
  );
}

export default App;
