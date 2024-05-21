import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home-Page/Home';
import About from './pages/About-Page/About';
import TeamPage from './pages/Team-Page/TeamPage';
import Methodology from './pages/Methodology/Methodology';
import CareerPage from './pages/Career-Page/CareerPage';
import HireDeveloperPage from './pages/Hire-Developer-Page/HireDeveloperPage';
import ServicesPage from './pages/Services-Page/ServicesPage';
import ContactPage from './pages/Contact-Page/ContactPage';
import PortfolioPage from './pages/Portfolio-Page/PortfolioPage';
import PortfolioDetailPage from './pages/Portfolio-Page/PortfolioDetailPage';
import BlogPage from './pages/Blog-Page/BlogPage';
import NotFoundPage from './pages/Not-Found-Page/NotFoundPage';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Blog_Catagory from './pages/Blog-Page/Catagory/Blog_Catagory';

const App = () => {

  function ScrollToTopAndLoading() {
    const { pathname } = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      window.scrollTo(0, 0);
      setTimeout(() => setLoading(false), 1000);

      return () => setLoading(false);
    }, [pathname]);

    return loading ? <LoadingSpinner /> : null;
  }

  return (
    <BrowserRouter>
      <ScrollToTopAndLoading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="company">
          <Route path="about-expoders" element={<About />} />
          <Route path="about-team" element={<TeamPage />} />
          <Route path="about-methodology" element={<Methodology />} />
        </Route>
        <Route path="career" element={<CareerPage />} />
        <Route path="hire-developer" element={<HireDeveloperPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="portfolio">
          <Route index element={<PortfolioPage />} />
          <Route path=":name" element={<PortfolioDetailPage />} />
        </Route>
        <Route path="blog">
          <Route index element={<BlogPage />} />
          <Route path=":category" element={<Blog_Catagory />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App