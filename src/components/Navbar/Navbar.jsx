import React, { useEffect, useState } from 'react'
import './Navbar.css';
import expoders_img from '../../assets/Expoders_logo2.png';
import { MdMenu } from "react-icons/md";

const Navbar = () => {
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
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={expoders_img} alt="" className='logo' />
      <ul className={MobileMenu ? '' : 'hide-mobile-icon'}>
        <li>
          Home
        </li>
        <li>
          Company
          <ul>
            <li>About Expoders</li>
            <li>About Team</li>
            <li>Methodology</li>
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