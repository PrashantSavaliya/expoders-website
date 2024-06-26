import React from 'react'
import './Blog.css'
import blog_img1 from '../../assets/blog_img1.png'
import blog_img2 from '../../assets/blog_img2.png'
import blog_img3 from '../../assets/blog_img3.png'
import { FaPlusCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom'
import { blogs } from '../../data/BlogData.js'

const Blog = () => {
    return (
        <div className='blog container'>
            <div className="blog-title">
                <h2>We’re here to share story from Latest <span>News</span></h2>
                <Link to='/blog'><button className='btn'>View All Blog <FaPlusCircle className='plus-icon' /></button></Link>
            </div>
            <div className="blogs">
                {blogs.slice(0, 3).map(filteredBlogs => {
                    return (
                        // <Link to = {`/blog/content/${filteredBlogs.route_url}`} state={{ filteredBlogs }}>
                        <Link to = '/blog'>
                            <div className="blog-item">
                                <div className="blog-header">
                                    <img src={filteredBlogs.img_name} alt="" />
                                    <button className='btn'>DESIGN</button>
                                </div>
                                <div className="blog-body">
                                    <div><span><SlCalender /></span> August 25, 2023</div>
                                    <p>{filteredBlogs.title}</p>
                                </div>
                                <div className="blog-footer">
                                    <div><span><CgProfile /></span> Alex Collins</div>
                                    <p>Learn More<FaPlusCircle className='plus-icon' /></p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default Blog