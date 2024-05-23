import React from 'react';
import './BlogPage.css';
import CtaBox from '../../components/CTA-Box/CtaBox.jsx';
import automation_img from '../../assets/blog_images/automation_img.jpg';
import { Link } from 'react-router-dom';
import { blogs, blog_details } from '../../data/BlogData.js';

const BlogPage = () => {
    const categories = [...new Set(blogs.map(blog => blog.title))];
    let filteredBlogs = null;
    return (
        <>
            <div className="blog-page container">
                <div className="blog-search">
                    <input type="text" placeholder='&#x1F50D; Search' />
                    <ul>
                        {categories.map(category => {
                            const formattedCategory = category.toLowerCase().replace(' ', '-').replace('/', '-').trim();
                            const final_filteredBlogs = blogs.filter(blog => blog.title.toLowerCase() === category.toLowerCase());
                            filteredBlogs = final_filteredBlogs;

                            return (
                                <li key={category}>
                                    <Link to={`/blog/${formattedCategory}`} state={{ filteredBlogs }} >
                                        {category}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <div className="blog-main">
                        <div className="blog-main-img">
                            <Link to='/blog/content/automation' state={{ filteredBlogs }}>
                                <img src={automation_img} alt="" />
                            </Link>
                        </div>
                        <div className="blog-content">
                            <h3>AUTOMATION <br />WEB DEVELOPMENT</h3>
                            <Link to='/blog/content/automation' state={{ filteredBlogs }}>
                                <h2>The Rise of AI in Software Development: Unlocking New Possibilities and Challenges</h2>
                            </Link>
                            <p>The software development industry is undergoing a major transformation, and artificial intelligence (AI) is at the forefront of this change. With the ability of Expoders  .........</p>
                        </div>
                    </div>
                    <div className="blog-suggestions">
                        {blog_details.map(details => {
                            const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase() === details.title.toLowerCase());
                            return (
                                <div className="blog-suggestion-box" key={details.id}>
                                    <Link to={`/blog/content/${details.route_url}`} state={{ filteredBlogs }}>
                                        <img src={details.imgName} alt="" />
                                        <div>
                                            <p>{details.title}</p>
                                            <h3>{details.description}</h3>
                                        </div>
                                    </Link>
                                </div>
                            )
                            // ))
                        })}
                    </div>
                </div>
            </div>
            <CtaBox />
        </>
    )
}

export default BlogPage;