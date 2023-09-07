import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/accomadations.css'


function Accomadations() {
  return (
    <div className='accomadation-container'>
        <Navbar/>
        <div className="accomadation-container1">
            <div className="row">
                <div className="col-3">
                <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Hotels</p>
                        </div>
                </div>
                </div>
                    
                </div>
                <div className="col-3">
                <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Hotels</p>
                        </div>
                </div>
                </div>
                    
                </div>
                <div className="col-3">
                <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Hotels</p>
                        </div>
                </div>
                </div>
                    
                </div>
                <div className="col-6">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accomadations