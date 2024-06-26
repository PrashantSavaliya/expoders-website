import React, { useRef } from 'react';
import Homebar from '../../components/Home/Home.jsx'
import Services from '../../components/Services/Services.jsx'
import Achievement from '../../components/Achievement/Achievement.jsx'
import About from '../../components/About/About.jsx'
import Projects from '../../components/Projects/Projects.jsx'
import Consulting from '../../components/Consulting/Consulting.jsx'
import Strategy from '../../components/Strategy/Strategy.jsx'
import Blog from '../../components/Blog/Blog.jsx'
import ClientReview from '../../components/Client-Review/ClientReview.jsx'
import CtaBox from '../../components/CTA-Box/CtaBox';

const Home = () => {
  const servicesRef = useRef(null);
  const clientRef = useRef(null);
  const achievementRef = useRef(null);

  const scrollToServices = () => {
    const offset = 125;
    if (servicesRef.current) {
      const topPos = servicesRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };
  const scrollToClient = () => {
    const offset = 125
    if (clientRef.current) {
      const topPos = clientRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth', });
    }
  };
  const scrollToAchievment = () => {
    const offset = -400
    if (achievementRef.current) {
      const topPos = achievementRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth', });
      console.log(window.scrollY);
    }
  };

  return (
    <div className='home-pages'>
      <Homebar scrollToServices={scrollToServices} />
      <div className="container">
        <div ref={servicesRef}>
          <Services />
        </div>
      </div>
      <div ref={achievementRef}>
        <Achievement scrollToAchievment={scrollToAchievment} />
      </div>
      <About scrollToClient={scrollToClient} />
      <Projects />
      <Consulting />
      <Strategy />
      <CtaBox />
      <div ref={clientRef}>
        <ClientReview />
      </div>
      <Blog />
    </div>
  )
}

export default Home
