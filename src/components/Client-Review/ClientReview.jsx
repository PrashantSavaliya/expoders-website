import React, { useRef, useState } from 'react'
import './ClientReview.css'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import client_img_1 from '../../assets/client_img_1.jpg';
import client_img_2 from '../../assets/client_img_2.jpeg';
import client_img_3 from '../../assets/client_img_3.png';
import client_img_4 from '../../assets/client_img_4.jpeg';
import client_img_5 from '../../assets/client_img_5.jpg';

const ClientReview = () => {

  const slider = useRef();
  const [tx, setTx] = useState(0);

  // let tx = 0;
  const slideForward = () => {
    if (tx > -60) {
      const newTx = tx - 20;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  }

  const slideBackward = () => {
    if (tx < 0) {
      const newTx = tx + 20;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  }

  return (
    <div className='client-review'>
      <div className='trustworthy'>TRUSTWORTHY</div>
      <h1>CLIENTS EVALUATE</h1>
      <p>We are proud of this number but we still level and level up to the high peak, hope to have all your backup along. Below is some feedbacks from our customers</p>
      <div className='review-items'>
        <FaArrowLeft className={`left-btn ${tx === 0 ? 'disabled' : ''}`} onClick={slideBackward} />
        <FaArrowRight className={`right-btn ${tx <= -60 ? 'disabled' : ''}`} onClick={slideForward} />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={client_img_1} alt="" />
                  <div>
                    <h3>Vinny Ch</h3>
                    <span>US</span>
                  </div>
                </div>
                <p>Excellent and very professional team and very easy to work with. I highly recommend them.Deliverable was high quality and exceeded my expectation. Will order again.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={client_img_2} alt="" />
                  <div>
                    <h3>ikeokw</h3>
                    <span>Caneda</span>
                  </div>
                </div>
                <p>Excellent programmer! With broad knowledge. Absolute delight working with them ! highly recommend.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={client_img_3} alt="" />
                  <div>
                    <h3>David Espin</h3>
                    <span>Spain</span>
                  </div>
                </div>
                <p>They are super fast to respond to our request and questions. Very communicative through the whole process. They asked our opinion and how they could improve the site further. Mobile site looks great! Looking forward to working with them for optimization and other issues on the site.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={client_img_4} alt="" />
                  <div>
                    <h3>Daniyal Nagori</h3>
                    <span>Pakistan</span>
                  </div>
                </div>
                <p>Great experience,Very good communicator and very accurate work, highly recommended. everything was as discussed and on time, BIG thumbs up!</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={client_img_5} alt="" />
                  <div>
                    <h3>Anassl</h3>
                    <span>Morocco</span>
                  </div>
                </div>
                <p>Amazing work and efficient developers, they made all their best to solve my issues in a wonderful manner. Very happy to find such developers, I recommend.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ClientReview