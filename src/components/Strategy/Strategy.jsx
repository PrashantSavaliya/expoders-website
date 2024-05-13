import React from 'react';
import './Strategy.css';
import strategy_img from '../../assets/strategy_img.png'

const Strategy = () => {
  return (
    <div className='container strategy'>
      <div className="left-strategy">
        <h1>Join the Community to learn About our <span>Company</span></h1>
        <p>Continually generate 2.0 communities and client-focused products. In synergize strategic manufactured products whereas levera.</p>
        <div className="strategy-bars">
          <div className="bar" id="business-strategy">
            <span>Business Strategy</span>
            <div className="fill" style={{ width: '65%' }}>
            <span className="percentage">65%</span>
            </div>
          </div>
          <div className="bar" id="technology-consulting">
            <span>Technology Consulting</span>
            <div className="fill" style={{ width: '90%' }}>
            <span className="percentage">90%</span>
            </div>
          </div>
          <div className="bar" id="product-development">
            <span>Product Development</span>
            <div className="fill" style={{ width: '80%' }}>
            <span className="percentage">80%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right-strategy">
        <img src={strategy_img} alt="" />
      </div>
    </div>
  )
}

export default Strategy