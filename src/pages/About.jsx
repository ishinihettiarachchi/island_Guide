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
      
    <div id="carouselExampleDark" className="carousel carousel-dark slide hello col-5 left">
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
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={img1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block slide-content">
            <h5 className='heading'>Welcome to</h5>
            <p className='para'>Sigiriya</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={img2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block slide-content">
            <h5 className='heading' >kkk</h5>
            <p className='para'>ooo</p>
          </div>
        </div>
        <div className="carousel-item">
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
        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
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
  <Footer/>
  </div>
  </div>
  )
}

export default About

