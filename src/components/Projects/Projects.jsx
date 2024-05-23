import React from 'react'
import './Projects.css'
import { FaPlusCircle } from "react-icons/fa";
import { CgPlayButtonO } from "react-icons/cg";
import project_img_1 from '../../assets/project_img_1.jpg'
import project_img_2 from '../../assets/project_img_2.jpg'
import project_img_3 from '../../assets/project_img_3.jpg'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='project container'>
            <div className="project-title">
                <h2>We Serve the Best Works View <span>Case Studies</span></h2>
                <Link to = '/portfolio'><button className='btn'>All Projects <FaPlusCircle className='plus-icon' /></button></Link>
            </div>
            <div className="project-shows">
                <div className="show">
                    <img src={project_img_1} alt="" />
                    <div className="caption">
                        <span><CgPlayButtonO className='play-button' /></span>
                        <h2>Consulting</h2>
                        <p>Strategy and Planning Building data</p>
                    </div>
                </div>
                <div className="show">
                    <img src={project_img_2} alt="" />
                    <div className="caption">
                        <span><CgPlayButtonO className='play-button' /></span>
                        <h2>Consulting</h2>
                        <p>Consulting for business organitzation</p>
                    </div>
                </div>
                <div className="show">
                    <img src={project_img_3} alt="" />
                    <div className="caption">
                        <span><CgPlayButtonO className='play-button' /></span>
                        <h2>Consulting</h2>
                        <p>Strategy and Planning Building data</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
