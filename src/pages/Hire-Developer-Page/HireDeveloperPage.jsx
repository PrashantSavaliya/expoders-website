import React from 'react'
import './HireDeveloperPage.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Achievement from '../../components/Achievement/Achievement'
import ClientReview from '../../components/Client-Review/ClientReview'
import BackgroundPage from '../../components/Page-start-Background/BackgroundPage';
import hire_developer_page_background from '../../assets/hire_developer_page_background.jpeg';
import { FaCheckCircle } from "react-icons/fa";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const HireDeveloperPage = () => {
    return (
        <>
            <Navbar />
            <div className="page-background-img-content">
                <BackgroundPage header='HIRE DEVELOPERS' page_name='Hire Developers' imageUrl={hire_developer_page_background} />
            </div>
            <div className="hire-developer container">
                <div className="hire-developer-left">
                    <h1>Free Quick Trial</h1>
                    <p>Expoders Solutions have a unique concept of low cost trial package, especially designed for evaluation purpose. Our trial package will help you to judge the efficiency and promptness of our developer(s) and team. Thus you can analyse and estimate the cost of your project making it easier for you to select the best developer as per your requirement.</p>
                    <p>At Expoders Solutions you can easily and quickly initiate with your project. We insist that you check out our one week trial package before finalizing a long term deal. Our trial version gives you the clear picture and the confidence to try and find out the best Professionals.</p>
                    <h2>What We Offer</h2>
                    <ul>
                        <li><FaCheckCircle className='check-mark' /> Highly qualified resources with years of experience</li>
                        <li><FaCheckCircle className='check-mark' /> 24×7 support system</li>
                        <li><FaCheckCircle className='check-mark' /> Regular reporting on daily / weekly basis (as per client needs)</li>
                        <li><FaCheckCircle className='check-mark' /> Flexible working hours</li>
                        <li><FaCheckCircle className='check-mark' /> 100% confidentiality assurance</li>
                    </ul>
                </div>
                <div className="hire-developer-right">
                    <h2>GET A QUICK QUOTE</h2>
                    <div>
                        <FormControl>
                            <RadioGroup row className='question' >
                                <FormControlLabel value="hire" control={<Radio />} label="Hire Developer" className='hire' />
                                <FormControlLabel value="quote" control={<Radio />} label="Request Quote" className='quote' />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            <Achievement />
            <ClientReview />
            <Footer />
        </>
    )
}

export default HireDeveloperPage
