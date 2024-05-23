import React from 'react'
import './Blog_Catagory.css'
import Navbar from '../../../components/Navbar/Navbar'
import CtaBox from '../../../components/CTA-Box/CtaBox'
import Footer from '../../../components/Footer/Footer'
import { Link, useLocation } from 'react-router-dom'

const Blog_Catagory = () => {

  const location = useLocation();
  const { filteredBlogs } = location.state || {};

  if (!filteredBlogs) {
    return <div>No blog data available.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="blog-catagory-container container">
        <div><Link to='/blog'><span>Blog</span></Link> / {filteredBlogs[0].title}</div>
        <h1>{filteredBlogs[0].title}</h1>
        <div className='blog-contant'>
          <img src={filteredBlogs[0].img_name} alt="" />
          <h2>{filteredBlogs[0].img_title}</h2>
          <h4>{filteredBlogs[0].title}</h4>
          <p>{filteredBlogs[0].description}</p>
          <h4><Link to={`/blog/content/${filteredBlogs[0].route_url}`} state={{ filteredBlogs }}>Read More ...</Link></h4>
        </div>
      </div>
      <CtaBox />
      <Footer />
    </>
  )
}

export default Blog_Catagory