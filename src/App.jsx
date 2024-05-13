import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Achievement from './components/Achievement/Achievement'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Consulting from './components/Consulting/Consulting'
import Footer from './components/Footer/Footer'
import Strategy from './components/Strategy/Strategy'
import Blog from './components/Blog/Blog'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <div className="container">
        <Services />
      </div>
      <Achievement />
      <About />
      <Projects />
      <Consulting />
      <Strategy />
      <Blog />
      <Footer />
    </>
  )
}

export default App
