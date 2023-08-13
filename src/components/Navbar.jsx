import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Navbar() {
  return (
    <div className='navbar-container'>
        <div className="row row1" >
            <div className="col-9" >
                <a href="#" className='icon'><EmailIcon/></a>
                <a href="#">islandguide@gmail.com</a>
            </div>
            <div className="col-3">
                <a href="#"><TwitterIcon/></a>
                <a href="#"><FacebookIcon/></a>
                <a href="#"><InstagramIcon/></a>
                <a href="#"><LinkedInIcon/></a>
            </div>
            
         </div>
        <div className="row row2">
            <div className="col-5">
               <img src={logo} alt="" />
            </div>
            <div className="col-6" id='links'>
                <a href="#">Home</a>
                <a href="#">Plan Your Trip</a>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="col-1" id='user-icon'>
               <a href=""><AccountCircleIcon/></a>
            </div>
         </div>
    </div>
  )
}

export default Navbar