import React, { useState, useEffect } from 'react';
import './Achievement.css';
import emp_img_1 from '../../assets/employee_img.png';
import { FaPlusCircle , FaCheckCircle } from "react-icons/fa";
import { useSpring, animated } from 'react-spring';

const Achievement = () => {
    const [isVisible, setIsVisible] = useState(false);

    const projectCompletedProps = useSpring({
        number: isVisible ? 150 : 0,
        from: { number: 0 },
        config: { duration: 3000 } 
    });
    const satisfiedClientsProps = useSpring({
        number: isVisible ? 60 : 0,
        from: { number: 0 },
        config: { duration: 3000 } 
    });
    const countriesServedProps = useSpring({
        number: isVisible ? 10 : 0,
        from: { number: 0 },
        config: { duration: 3000 } 
    });
    const repeatersProps = useSpring({
        number: isVisible ? 40 : 0,
        from: { number: 0 },
        config: { duration: 3000 } 
    });
    const handleScroll = () => {
        const element = document.querySelector('.achievement-list');
        const scrollPosition = window.innerHeight + window.scrollY;
        const elementPosition = element.offsetTop;

        if (scrollPosition > elementPosition) {
            setIsVisible(true);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='forall'>
            <div className="achievement container">
                <div className="left-side-achievement">
                    <img src={emp_img_1} alt="" />
                </div>
                <div className="right-side-achievement">
                    <div className='right-top'>
                        <h2>The Fastest Way To Achieve Your Business <span>Success</span></h2>
                        <p>Continually generate 2.0 communities and client-focused products. In synergize strategic manufactured products whereas levera.</p>
                    </div>
                    <div className="right-bottom">
                        <div>We are Since <span>2007 to Present</span> in Sandigo, USA</div>
                        <ul>
                            <li><FaCheckCircle className='check-mark' /> Credibly reinvent sticky partnerships done</li>
                            <li><FaCheckCircle className='check-mark' /> Distinctively evisculate data superior content.</li>
                            <li><FaCheckCircle className='check-mark' /> Monotonectally foster open source</li>
                        </ul>
                        <button className='btn'>Learn More <FaPlusCircle className='plus-icon' /></button>
                    </div>
                </div>
            </div>
            <div className="achievement-list container">
                <h2>Our Achievements</h2>
                <div className="lists">
                    <div className="list">
                        <h1><animated.span>{projectCompletedProps.number.interpolate(value => Math.floor(value))}</animated.span> <span>+</span></h1>
                        <p>Project Completed</p>
                    </div>
                    <div className="list">
                        <h1><animated.span>{satisfiedClientsProps.number.interpolate(value => Math.floor(value))}</animated.span> <span>+</span></h1>
                        <p>SATISFIED CLIENTS</p>
                    </div>
                    <div className="list">
                        <h1><animated.span>{countriesServedProps.number.interpolate(value => Math.floor(value))}</animated.span> <span>+</span></h1>
                        <p>COUNTRIES WE SERVE IN</p>
                    </div>
                    <div className="list">
                        <h1><animated.span>{repeatersProps.number.interpolate(value => Math.floor(value))}</animated.span> <span>+</span></h1>
                        <p>REPEATERS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;