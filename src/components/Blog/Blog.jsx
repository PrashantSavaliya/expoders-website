import React from 'react'
import './Blog.css'
import blog_img1 from '../../assets/blog_img1.png'
import blog_img2 from '../../assets/blog_img2.png'
import blog_img3 from '../../assets/blog_img3.png'
import { FaPlusCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

const Blog = () => {
    return (
        <div className='blog container'>
            <div className="blog-title">
                <h2>We’re here to share story from Latest <span>News</span></h2>
                <button className='btn'>View All Blog <FaPlusCircle className='plus-icon' /></button>
            </div>
            <div className="blogs">
                <div className="blog-item">
                    <div className="blog-header">
                        <img src={blog_img1} alt="" />
                        <button className='btn'>GRAPHIC</button>
                    </div>
                    <div className="blog-body">
                        <div><span><SlCalender /></span> August 25, 2023</div>
                        <p>Popular Consultants are big Meetup 2023</p>
                    </div>
                    <div className="blog-footer">
                        <div><span><CgProfile /></span> Alex Collins</div>
                        <p>Learn More<FaPlusCircle className='plus-icon' /></p>
                    </div>
                </div>
                <div className="blog-item">
                    <div className="blog-header">
                        <img src={blog_img2} alt="" />
                        <button className='btn'>DEVELOPMENT</button>
                    </div>
                    <div className="blog-body">
                        <div><span><SlCalender /></span> August 25, 2023</div>
                        <p>Popular Consultants are big Meetup 2023</p>
                    </div>
                    <div className="blog-footer">
                        <div><span><CgProfile /></span> Alex Collins</div>
                        <p>Learn More<FaPlusCircle className='plus-icon' /></p>
                    </div>
                </div>
                <div className="blog-item">
                    <div className="blog-header">
                        <img src={blog_img3} alt="" />
                        <button className='btn'>DESIGN</button>
                    </div>
                    <div className="blog-body">
                        <div><span><SlCalender /></span> August 25, 2023</div>
                        <p>Popular Consultants are big Meetup 2023</p>
                    </div>
                    <div className="blog-footer">
                        <div><span><CgProfile /></span> Alex Collins</div>
                        <p>Learn More<FaPlusCircle className='plus-icon' /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog