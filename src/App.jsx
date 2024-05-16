import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home-Page/Home';
import About from './pages/About-Page/About';
import TeamPage from './pages/Team-Page/TeamPage';
import Methodology from './pages/Methodology/Methodology';
import CareerPage from './pages/Career-Page/CareerPage';
import HireDeveloperPage from './pages/Hire-Developer-Page/HireDeveloperPage';
import ServicesPage from './pages/Services-Page/ServicesPage';
import ContactPage from './pages/Contact-Page/ContactPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/about-expoders" element={<About />} />
        <Route path='/company/about-team' element={<TeamPage />} />
        <Route path='/company/about-methodology' element={<Methodology />} />
        <Route path='/career' element={<CareerPage />} />
        <Route path='/hire-developer' element={<HireDeveloperPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact-us' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
