import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/plan.css'
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';

function Plan() {
  return (
    <div className='plan-container'>
        <div className="plan-container1">
        <Navbar/>
        <div className="plan-container-text">
        <div className="plan-text">
                <h1>Plan Your Trip As You Wish...</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor </p>
      
        </div>
        </div>
            
        </div>
        <div className="plan-container2">
      
            <div className="container plan-list">
                <div className="row">
                <Link className='col-6 plan-items-link'>
                <div className="plan-items">
                    <img src="https://th.bing.com/th/id/R.b7488e46c98346f74af330394d53e201?rik=%2fcIxpkyk%2bAn60g&pid=ImgRaw&r=0" alt="" />
                    <div className='plan-items-description'>
                    <h3>Find Your Accomadations</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam,</p>
                    </div>
                    
                </div>
                </Link>
                <Link className='col-6 plan-items-link'>
                <div className="plan-items">
                <img src="https://th.bing.com/th/id/R.a80e9defa25a387e14eea95b855d3f68?rik=tLk9cIdWCuyP1A&pid=ImgRaw&r=0" alt="" />
                <div className='plan-items-description'>
                    <h3>Reach Tour Guides</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam,</p>
                </div>
                </div>
                </Link>
                </div>
                <div className="row">
                <Link className='col-6 plan-items-link'>
                <div className="plan-items">
                <img src="https://media.istockphoto.com/id/470861448/photo/camping-tent-in-campground-at-national-park-with-sunrise.jpg?s=170667a&w=0&k=20&c=yyOHj8ZosR5dwr-uQmudaPS9FW-ouCb7m3bLN4h-OdY=" alt="" />
                <div className='plan-items-description'>
                    <h3>Camping Sites</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam,</p>
                </div>
                </div>
                </Link>
                <Link className='col-6 plan-items-link'>
                <div className="plan-items">
                <img src="https://th.bing.com/th/id/R.0f74e7b1ad3f8d443fbd5fc73f18733e?rik=LwVEoAcK8wJmEQ&pid=ImgRaw&r=0" alt="" />
                <div className='plan-items-description'>
                <h3>Find Your Driver</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam,</p>
                </div>
                
                </div>
                </Link>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Plan
