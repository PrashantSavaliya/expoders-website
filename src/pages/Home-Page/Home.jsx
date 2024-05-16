import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Homebar from '../../components/Home/Home.jsx'
import Services from '../../components/Services/Services.jsx'
import Achievement from '../../components/Achievement/Achievement.jsx'
import About from '../../components/About/About.jsx'
import Projects from '../../components/Projects/Projects.jsx'
import Consulting from '../../components/Consulting/Consulting.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Strategy from '../../components/Strategy/Strategy.jsx'
import Blog from '../../components/Blog/Blog.jsx'
import ClientReview from '../../components/Client-Review/ClientReview.jsx'
import CtaBox from '../../components/CTA-Box/CtaBox';

const Home = () => {
  return (
    <>
      <Navbar />
      <Homebar />
      <div className="container">
        <Services />
      </div>
      <Achievement />
      <About />
      <Projects />
      <Consulting />
      <Strategy />
      <CtaBox />
      <ClientReview />
      <Blog />
      <Footer />
    </>
  )
}

export default Home
