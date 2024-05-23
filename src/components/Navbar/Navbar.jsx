import React, { useEffect, useState } from 'react'
import './Navbar.css';
import expoders_img from '../../assets/Expoders_logo2.png';
import { MdMenu } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ dark_nav }) => {
  const [sticky, setSticky] = useState(false)
  const [MobileMenu, setMobileMenu] = useState(false)
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const toggleMenu = () => {
    MobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  const isActive = (path) => {
    // return location.pathname === path ? 'active' : '';
    // return location.pathname.startsWith(path) ? 'active' : '';
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path)) ? 'active' : '';
  };

  return (
    // <nav className={`container ${sticky ? dark_nav : 'dark-nav'}`}>
    <nav className='container dark-nav'>
      <Link to = '/'><img src={expoders_img} alt="" className='logo' /></Link>
      <ul className={MobileMenu ? '' : 'hide-mobile-icon'}>
        <li className={isActive('/')}>
          <Link to='/'>Home</Link>
        </li>
        <li className={isActive('/company')}>
          <Link to='/company/about-expoders'>Company</Link>
          <ul>
            <li className={isActive('/company/about-expoders')}><Link to='/company/about-expoders'>About Expoders</Link></li>
            <li className={isActive('/company/about-team')}><Link to='/company/about-team'>About Team</Link></li>
            <li className={isActive('/company/about-methodology')}><Link to='/company/about-methodology'>Methodology</Link></li>
          </ul>
        </li>
        <li className={isActive('/services')}>
          <Link to='/services'>Service</Link>
          <ul>
            <li><Link to='/services'>WEB DEVELOPMENT</Link></li>
            <li><Link to='/services'>MOBILE APP DEVELOPMENT</Link></li>
            <li><Link to='/services'>DESIGN AND CNS</Link></li>
            <li><Link to='/services'>OTHER IT SERVICES</Link></li>
          </ul>
        </li>
        <li className={isActive('/portfolio')}><Link to='/portfolio'>Portfolio</Link></li>
        <li className={isActive('/hire-developer')}><Link to='/hire-developer'>Hire Developers</Link></li>
        <li className={isActive('/career')}><Link to='/career'>Career</Link></li>
        <li className={isActive('/blog')}><Link to='/blog'>Blog</Link></li>
        <li><button className='btn'><Link to='/contact-us'>Contact Us</Link></button></li>
      </ul>
      <MdMenu className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar