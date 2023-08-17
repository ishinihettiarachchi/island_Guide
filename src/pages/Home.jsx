import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/home.css'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import pic4 from '../images/pic4.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


function Home() {
  return (
<div className="home-container">
      
    <div className='row home-container1'>
            <Navbar/>
        <div className="row home-row2">
              <div className="col-5 description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="col-5 search-block" >
                
                  <input type="text" name="" id="" className='search-text' />
                  <button className='search-btn'>Search</button>
                  <br /> <br />
                  <p>Explore your destination here...</p>
              </div>
        </div>
        
    </div>
    
    <div className="row home-container2">
            <h2>Explore Island Stories...</h2>
            <p className='main-para'>Discover the narratives woven into every corner and smile of Sri Lanka. 
                  This enchanting island is brimming with captivating tales, and we are eager 
                  to unveil its treasures just for you. Join us on this journey to our idyllic 
                  paradise, where stories come to life.</p>
            <div className="row features">
            <div className="col-3 card">
                        <img src={pic1}/>
                        <div className="layer">
                              <h3>Explore</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, </p>
                              <a href="#" target="_blank"><OpenInNewIcon/></a>
                        </div>
                  </div>
                  <div className="col-3 card">
                        <img src={pic2}/>
                        <div className="layer">
                              <h3>Things To Do</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, </p>
                              <a href="#" target="_blank"><OpenInNewIcon/></a>
                        </div>
                        
                  </div>
                  <div className="col-3 card">
                        <img src={pic3}/>
                        <div className="layer">
                              <h3>Plan Your Trip</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, </p>
                    <a href="#" target="_blank"><OpenInNewIcon/></a>
                        </div>
                        
                  </div>
                  <div className="col-3 card">
                        <img src={pic4}/>
                        <div className="layer">
                              <h3>Our Services</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, </p>
                    <a href="#" target="_blank"><OpenInNewIcon/></a>
                        </div>
                  </div>
            </div>
    </div>
    
              <Footer/>
      
    </div>

  )
}

export default Home