import React from 'react'
import './Blog_Catagory.css'
import Navbar from '../../../components/Navbar/Navbar'
import CtaBox from '../../../components/CTA-Box/CtaBox'
import Footer from '../../../components/Footer/Footer'
import { Link, useLocation } from 'react-router-dom'
import top_skills_img from '../../../assets/blog_images/top_skills_img.jpeg'

const Blog_Catagory = () => {

  const location = useLocation();
  const { filteredBlogs } = location.state;
  console.log(filteredBlogs, 5);

  if (!filteredBlogs) {
    return <div>No blog data available.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="blog-catagory-container container">
        <div><Link to='/blog'><span>Blog</span></Link> / {filteredBlogs.title}</div>
        <h1>{filteredBlogs.title}</h1>
        <div className='blog-contant'>
          <img src={top_skills_img} alt="" />
          <h2>Top skills and technologies to consider learning in 2023?</h2>
          <h4>Marketing</h4>
          <p>It’s that time of the year to auto-evaluate your past achievements and set a new bucket list for the upcoming year. It’s important to set smart and measurable goals to achieve growth and prosperity. The key to staying relevant and earning greater pay in the upcoming year is to acquire new, in-demand skill sets, as …</p>
          <h4>Read More ...</h4>
        </div>
      </div>
      <CtaBox />
      <Footer />
    </>
  )
}

export default Blog_Catagory