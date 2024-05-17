import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import './ContactPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { IoEarthSharp, IoMailOutline } from "react-icons/io5";
import { FaSkype, FaPhone, FaLocationDot } from "react-icons/fa6";

const ContactPage = () => {
    const { isLoaded } = useLoadScript({
        // googleMapsApiKey: process.env.AIzaSyBIVVZ9Kuz0GaVRw_0LkkUPKyavU4OhobM
        googleMapsApiKey: ''
    });
    const center = useMemo(() => ({ lat: 23.1345215, lng: 72.539111 }), []);
    return (
        <>
            <Navbar />
            <div className="contact-page">
                <div className="App">
                    {!isLoaded ? (
                        <h1>Loading...</h1>
                    ) : (
                        <GoogleMap
                            mapContainerClassName="map-container"
                            center={center}
                            zoom={17}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    )}
                </div>
                <div className="contact-details container">
                    <div className="contact-details-left">
                        <h2>Contact Details</h2>
                        <ul>
                            <li><IoEarthSharp className='contact-icons' /> India, Australia</li>
                            <li><FaSkype className='contact-icons' /> dashu6101</li>
                            <li><IoMailOutline className='contact-icons' /> info@expoders.com</li>
                            <li><FaPhone className='contact-icons' /> (+91) 8460 311248</li>
                            <li><FaLocationDot className='contact-icons' /> 503, Horizon Trade Center, Vaishnovdevi circle Besides KD hospital, Sarkhej - Gandhinagar Highway, Ahmedabad, Gujarat 382481</li>
                            <li><FaLocationDot className='contact-icons' /> F/25, Ashapura complex, Detroj Road, Kadi 382715</li>
                        </ul>
                    </div>
                    <div className="contact-details-right">
                        <h3>SEND US A MESSAGE</h3>
                        <p>Do you have small changes to make, need to troubleshoot something or have a new idea you’d like to implement? Let’s chat; text or talk, and get it done. We pride ourselves on having outstanding customer service. Just let us know what you need and Seecoding Technologies Customer Service will let you know how can make it happen.</p>
                        <form>
                            <div className="form-row">
                                <input type="text" placeholder="Please enter your full name" required/>
                                <input type="email" placeholder="Please enter your email" required />
                            </div>
                            <div className="form-row">
                                <input type="text" placeholder="Please enter your subject" required />
                            </div>
                            <div className="form-row">
                                <textarea placeholder="Please enter Your Message" required></textarea>
                            </div>
                            <button className="submit-btn" type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactPage;
