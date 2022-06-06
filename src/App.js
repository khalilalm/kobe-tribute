import React from 'react';
import Navbar from './Navbar';
import LifeofKobe from './Lok';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mamba from './Mamba';
import './App.css';
import KobeHeroSection from './KobeHeroSection';



function App() {
  return (
    <div className="App">
    
      <Navbar />
      <KobeHeroSection />
      <LifeofKobe />
      <Mamba />
    </div>
    
  );
}

export default App;
