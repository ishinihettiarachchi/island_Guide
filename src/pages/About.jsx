import React from 'react'
import img1 from '../images/slider-img1.jpeg';
import img2 from '../images/slider-img2.jpg';
import img3 from '../images/slider-img3.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import '../styles/about.css'

function About() {
  return (   
    <div className='about-container'>
      <div className="row about-container1">
        <div className="row about-container1 nav">
        <Navbar/>
        </div>
        <div className="row about-content-all">
      <div className=" col-5 slider ">
        <div id="carouselExampleDark" className="carousel carousel-dark slide hello left" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active" data-bs-interval="3000"> 
      <img src={img1} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block slide-content">
        <h5 className='heading'>Welcome to</h5>
        <p className='para'>Sigiriya</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="1500"> 
      <img src={img2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block slide-content">
        <h5 className='heading' >kkk</h5>
        <p className='para'>ooo</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000"> 
      <img src={img3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block slide-content">
        <h5 className='heading'>jnkj</h5>
        <p className='para'>klk</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev prev-icon"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className="col-7 paragraph">
  <p className='about-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
</div>
<Footer/>
</div>
</div>
  )
}

export default About

