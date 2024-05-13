import React from 'react'
import './Home.css'
import { BiRightArrowAlt } from "react-icons/bi";

const Home = () => {
  return (
    <div className='home container'>
      <div className="home-text">
        <h1>Innovate Solution For Business Success</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempora ad praesentium architecto eos, odio porro optio quam! Esse voluptatum explicabo corrupti. Soluta, obcaecati rem harum commodi repudiandae illum doloremque?</p>
        <button className='btn'>Explore more <BiRightArrowAlt className='right-arrow' /></button>
      </div>
    </div>
  )
}

export default Home
