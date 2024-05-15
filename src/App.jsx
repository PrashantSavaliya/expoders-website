import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home-Page/Home';
import About from './pages/About-Page/About';
import TeamPage from './pages/Team-Page/TeamPage';
import Methodology from './pages/Methodology/Methodology';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about-expoders" element={<About />} />
          <Route path='/about-team' element={<TeamPage />} />
          <Route path='/about-methodology' element={<Methodology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
