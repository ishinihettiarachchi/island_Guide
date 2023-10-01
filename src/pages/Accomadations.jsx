import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/accomadations.css'
import StarIcon from '@mui/icons-material/Star';


function Accomadations() {
  return (
    <div className='accomadation-container'>
        <Navbar/>
        <div className="accomadation-container1">
        <div className='row'> 
            <div className="row">
                <div className="col-3">
                <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Hotels</p>
                        </div>
                </div>
                </div>
                    
                </div>
                <div className="col-3">
                <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Hotels</p>
                        </div>
                </div>
                </div>
                    
                </div>
                <div className="col-3">
                <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Hotels</p>
                        </div>
                </div>
                </div>
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Hotels</p>
                        </div>
                </div>
                </div>
                </div>

                <div className="col-3">
                <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Hotels</p>
                        </div>
                </div>
                </div>
                </div>

                <div className="col-3">
                <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Hotels</p>
                        </div>
                        </div>
                </div>
                </div>
                
                
            </div>
      
           <div className="col-3 guide">
                <div class="card guide-ds">
                    <h2>Accomadation Guide</h2>
                    <hr/>
                    <h6>5 Stars    
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </h6>
                    <p>Superior standard and an extensive range of first-class guest services</p><br />
                    <h6>4 Stars    
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </h6>
                    <p>Exceptional standard with high-quality furnishings and comfort</p><br />
                    <h6>3 Stars    
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </h6>
                    <p>Well-appointed establishments with comfortable, clean rooms and quality furnishings</p><br />
                    <h6>Less than 3 Stars</h6>
                    <p>A basic, well-maintained standard</p>
                    <h6>Boutique Hotel and Villas</h6>
                    <p>Small but exclusive property that caters to the affluent clientele with an exceptional level of service at premium prices.</p><br />
                    <h6>Bungalow</h6>
                    <p>A type of real estate property that consists of a small, one story home with an enclosed porch.</p><br />
                    <h6>Boutique Hotel</h6>
                    <p>Small but exclusive property that caters to the affluent clientele with an exceptional level of service at premium prices.</p><br />
            
                </div>
                </div>
                </div>
                </div>
    </div>
  )
}

export default Accomadations