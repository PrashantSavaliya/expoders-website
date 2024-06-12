// import React, { useEffect, useState } from 'react'
// import './Navbar.css';
// import expoders_img from '../../assets/Expoders_logo2.png';
// import { MdMenu } from "react-icons/md";
// import { FaCaretDown } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// 
// const Navbar = ({ dark_nav }) => {
//   const [sticky, setSticky] = useState(false)
//   const [MobileMenu, setMobileMenu] = useState(false)
//   const location = useLocation();
// 
//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       window.scrollY > 50 ? setSticky(true) : setSticky(false)
//     })
//   }, [])
// 
//   const toggleMenu = () => {
//     setMobileMenu(!MobileMenu);
//   }
// 
//   const closeMenu = () => {
//     setMobileMenu(false);
//   }
// 
//   const isActive = (path) => {
//     return location.pathname === path || (path !== '/' && location.pathname.startsWith(path)) ? 'active' : '';
//   };
// 
//   return (
//     <nav className='container dark-nav'>
//       <Link to='/'><img src={expoders_img} alt="" className='logo' /></Link>
//       <ul className={MobileMenu ? '' : 'hide-mobile-icon'}>
//         <li className={isActive('/')} onClick={closeMenu}>
//           <Link to='/'>Home</Link>
//         </li>
//         <li className={isActive('/company')}>
//           <Link to='/company/about-expoders'>Company <FaCaretDown /></Link>
//           <ul>
//             <li className={isActive('/company/about-expoders')} onClick={closeMenu}><Link to='/company/about-expoders'>About Expoders</Link></li>
//             <li className={isActive('/company/about-team')} onClick={closeMenu}><Link to='/company/about-team'>About Team</Link></li>
//             <li className={isActive('/company/about-methodology')} onClick={closeMenu}><Link to='/company/about-methodology'>Methodology</Link></li>
//           </ul>
//         </li>
//         <li className={isActive('/services')}>
//           <Link to='/services'>Service <FaCaretDown /></Link>
//           <ul>
//             <li onClick={closeMenu}><Link to='/services'>WEB DEVELOPMENT</Link></li>
//             <li onClick={closeMenu}><Link to='/services'>MOBILE APP DEVELOPMENT</Link></li>
//             <li onClick={closeMenu}><Link to='/services'>DESIGN AND CNS</Link></li>
//             <li onClick={closeMenu}><Link to='/services'>OTHER IT SERVICES</Link></li>
//           </ul>
//         </li>
//         <li className={isActive('/portfolio')} onClick={closeMenu}><Link to='/portfolio'>Portfolio</Link></li>
//         <li className={isActive('/hire-developer')} onClick={closeMenu}><Link to='/hire-developer'>Hire Developers</Link></li>
//         <li className={isActive('/career')} onClick={closeMenu}><Link to='/career'>Career</Link></li>
//         <li className={isActive('/blog')} onClick={closeMenu}><Link to='/blog'>Blog</Link></li>
//         <li onClick={closeMenu}><button className='btn'><Link to='/contact-us'>Contact Us</Link></button></li>
//       </ul>
//       <MdMenu className='menu-icon' onClick={toggleMenu} />
//     </nav>
//   )
// }
// 
// export default Navbar

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import expoders_img from '../../assets/Expoders_logo2.png';
import { MdMenu } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ dark_nav }) => {
  const [sticky, setSticky] = useState(false)
  const [MobileMenu, setMobileMenu] = useState(false)
  const [companySubmenuOpen, setCompanySubmenuOpen] = useState(false); 
  const [serviceSubmenuOpen, setserviceSubmenuOpen] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const toggleMenu = () => {
    setMobileMenu(!MobileMenu);
  }

  const closeMenu = () => {
    setMobileMenu(false);
    setCompanySubmenuOpen(false); 
    setserviceSubmenuOpen(false); 
  }

  const toggleCompanySubmenu = () => {
    setCompanySubmenuOpen(prevState => !prevState); 
  }

  const toggleServiceSubmenu = () => {
    setserviceSubmenuOpen(prevState => !prevState); 
  }

  const isActive = (path) => {
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path)) ? 'active' : '';
  };

  return (
    <nav className='container dark-nav'>
      <Link to='/'><img src={expoders_img} alt="" className='logo' /></Link>
      <ul className={MobileMenu ? '' : 'hide-mobile-icon'}>
        <li className={isActive('/')} onClick={closeMenu}>
          <Link to='/'>Home</Link>
        </li>
        <li className={isActive('/company')}>
          <span>Company <FaCaretDown /></span>
          {/* <span onClick={toggleCompanySubmenu}>Company <FaCaretDown /></span> */}
          {/* <ul className={companySubmenuOpen ? 'show' : ''}> */}
          <ul>
            <li className={isActive('/company/about-expoders')} onClick={closeMenu}><Link to='/company/about-expoders'>About Expoders</Link></li>
            <li className={isActive('/company/about-team')} onClick={closeMenu}><Link to='/company/about-team'>About Team</Link></li>
            <li className={isActive('/company/about-methodology')} onClick={closeMenu}><Link to='/company/about-methodology'>Methodology</Link></li>
          </ul>
        </li>
        <li className={isActive('/services')}>
          <span>Services <FaCaretDown /></span>
          {/* <span onClick={toggleServiceSubmenu}>Services <FaCaretDown /></span> */}
          {/* <ul className={serviceSubmenuOpen ? 'show' : ''}> */}
          <ul>
            <li onClick={closeMenu}><Link to='/services'>WEB DEVELOPMENT</Link></li>
            <li onClick={closeMenu}><Link to='/services'>MOBILE APP DEVELOPMENT</Link></li>
            <li onClick={closeMenu}><Link to='/services'>DESIGN AND CNS</Link></li>
            <li onClick={closeMenu}><Link to='/services'>OTHER IT SERVICES</Link></li>
          </ul>
        </li>
        <li className={isActive('/portfolio')} onClick={closeMenu}><Link to='/portfolio'>Portfolio</Link></li>
        <li className={isActive('/hire-developer')} onClick={closeMenu}><Link to='/hire-developer'>Hire Developers</Link></li>
        <li className={isActive('/career')} onClick={closeMenu}><Link to='/career'>Career</Link></li>
        <li className={isActive('/blog')} onClick={closeMenu}><Link to='/blog'>Blog</Link></li>
        <li onClick={closeMenu}><button className='btn'><Link to='/contact-us'>Contact Us</Link></button></li>
      </ul>
      <MdMenu className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar;
