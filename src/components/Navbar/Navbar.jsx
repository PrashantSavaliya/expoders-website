import React, { useEffect, useState } from 'react'
import './Navbar.css';
import expoders_img from '../../assets/Expoders_logo2.png';
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ( {dark_nav} ) => {
  const [sticky, setSticky] = useState(false)
  const [MobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const toggleMenu = () => {
    MobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    // <nav className={`container ${sticky ? dark_nav : 'dark-nav'}`}>
    <nav className='container dark-nav'>
      <img src={expoders_img} alt="" className='logo' />
      <ul className={MobileMenu ? '' : 'hide-mobile-icon'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          Company
          <ul>
          <li><Link to ='/about-expoders'>About Expoders</Link></li>
            <li><Link to = '/about-team'>About Team</Link></li>
            <li><Link to = '/about-methodology'>Methodology</Link></li>
          </ul>
        </li>
        <li>
          Service
          <ul>
            <li>WEB DEVELOPMENT</li>
            <li>MOBILE APP DEVELOPMENT</li>
            <li>DESIGN AND CNS</li>
            <li>OTHER IT SERVICES</li>
          </ul>
        </li>
        <li>Portfolio</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
      <MdMenu className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar