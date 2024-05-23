import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton '


const Root = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollToTopButton /> 
    </>
  )
}

export default Root
