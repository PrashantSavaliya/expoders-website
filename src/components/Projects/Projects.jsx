import React from 'react'
import './Projects.css'
import { FaPlusCircle } from "react-icons/fa";
import { CgPlayButtonO } from "react-icons/cg";
import { Link } from 'react-router-dom';
import projects from '../../data/PortfolioData.js';

const Projects = () => {
    return (
        <div className='project container'>
            <div className="project-title">
                <h2>We Serve the Best Works View <span>Case Studies</span></h2>
                <Link to='/portfolio'><button className='btn'>All Projects <FaPlusCircle className='plus-icon' /></button></Link>
            </div>
            <div className="project-shows">
                {projects.slice(0, 3).map(project => (
                    <div className="show">
                        <Link to={`/portfolio/${project.name}`} state={{project}}>
                            <img src={project.imageUrl} alt="" />
                            <div className="caption">
                                <span><CgPlayButtonO className='play-button' /></span>
                                <h2>{project.name}</h2>
                                <p>{project.technology}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects