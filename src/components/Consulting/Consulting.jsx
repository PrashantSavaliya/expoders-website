import React from 'react'
import './Consulting.css'
import { FaPlusCircle } from "react-icons/fa";
import { TbSquareRoundedNumber1, TbSquareRoundedNumber2, TbSquareRoundedNumber3, TbSquareRoundedNumber4 } from "react-icons/tb";

const Consulting = () => {
    return (
        <div className='container consulting'>
            <div className="consulting-left">
                <div className="main-box">
                    <div className="first-colum">
                        <div className="boxes">
                            <TbSquareRoundedNumber1 className='number' />
                            <h2><span>Idea</span> Generate</h2>
                            <p>Appropriately enhance data centered innovation</p>
                        </div>
                        <div className="boxes">
                            <TbSquareRoundedNumber3 className='number' />
                            <h2><span>24/7</span> Support</h2>
                            <p>Appropriately enhance data centered innovation</p>
                        </div>
                    </div>
                    <div className="second-colum">
                        <div className="boxes">
                            <TbSquareRoundedNumber2 className='number' />
                            <h2><span>System</span> Design</h2>
                            <p>Appropriately enhance data centered innovation</p>
                        </div>
                        <div className="boxes">
                            <TbSquareRoundedNumber4 className='number' />
                            <h2><span>Sales</span> Generate</h2>
                            <p>Appropriately enhance data centered innovation</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="consulting-right">
                <h1>The Fatest Way To Achieve Technology <span>Consulting</span></h1>
                <h2>For Choose <span>Consen</span> Before know who we are?</h2>
                <p>Monotonectally brand worldwide value before in seamless process data Collaboratively initiate strategic expertise after functionalized models in. Synergistically synthesize front-end convergence whereas resource tosynergy. Collaboratively the expedite focused architectures rather than resources. Enthusiastically extensive.</p>
                <button className='btn'>More About <FaPlusCircle className='plus-icon' /> </button>
            </div>
        </div>
    )
}

export default Consulting