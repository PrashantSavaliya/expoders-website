import React from 'react'
import './Home.css'
import { BiRightArrowAlt } from "react-icons/bi";

const Home = ({ scrollToServices }) => {
  return (
    <div className='home container'>
      <div className="home-text">
        <h1><span>THE TEAM OF AN </span><br /> EXPERT CODERS</h1>
        <p>Expoders is a global IT solutions and product development company which is missioned to help end users increase business productivity through the use of Microsoft technologies.</p>
        <button className='btn' onClick={scrollToServices}>Explore more <BiRightArrowAlt className='right-arrow' /></button>
      </div>
    </div>
  )
}

export default Home
