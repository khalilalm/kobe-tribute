import React from 'react';
import Navbar from './Navbar';
import EarlyLife from './EarlyLife';
import Struggles from './Struggles';
import Mamba from './Mamba';
import './App.css';
import KobeHeroSection from './KobeHeroSection';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (<BrowserRouter>
    <div className="App">
       
      <Navbar />
      <KobeHeroSection />
      <EarlyLife />
      <Struggles />
      <Mamba />
    </div>
    </BrowserRouter>
  );
}

export default App;
