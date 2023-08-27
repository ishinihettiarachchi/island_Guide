import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/attractions.css'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react';
import axios from 'axios';


function Attractions() {
  const [places, setPlaces] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/api/v1/places')
    .then(places =>  setPlaces(places.data))
    .catch(err=>console.log(err))
  },[])

  return (
    <div className='attractions-container'>
        <div className="attractions-container1">
            <Navbar/>
            <div className="image-row-content">

            <div className="image-row">
                <h2>Sri lanka Attractions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.</p>
                <div className="search-content">
                <input type="text" />
                <button className='attraction-button'>Search</button>
                </div>
            </div>
            </div>
        </div>
        <div className="places">
          <div className="row place-review">
          <nav class="bg-dark navbar-dark">
  <div class="container place-list-container">
  </div>
  </nav> 
   <section id="header" class="jumbotron text-center">
     <h1 class="display-3">Explore</h1>
     <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
     
</section>
  
<section id="gallery">
  <div class="container">
    <div class="row">
      {
        places.map(places=>{
          return  <div class="col-lg-3 mb-3">
          <div class="card place">
            <img src={places.image} alt="" class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">{places.name}</h5>
              <p class="card-text">{places.description}</p>
             <a href="" class="btn btn-outline-success btn-sm">Read More</a>
            </div>
           </div>
          </div>
        })
      }
    

  </div>
</div>
</section>
<section id="gallery">
  <div class="container">
    <div class="row">
    <div class="col-lg-3 mb-3">
    <div class="card place">
      <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Sunset</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Incidunt repellendus praesentium quae!</p>
       <a href="" class="btn btn-outline-success btn-sm">Read More</a>
      </div>
     </div>
    </div>
    <div class="col-lg-3 mb-3">
    <div class="card place">
      <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Sunset</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Incidunt repellendus praesentium quae!</p>
       <a href="" class="btn btn-outline-success btn-sm">Read More</a>
      </div>
     </div>
    </div>
  <div class="col-lg-3 mb-3">
  <div class="card">
      <img src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Sunset</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Incidunt repellendus praesentium quae!</p>
       <a href="" class="btn btn-outline-success btn-sm">Read More</a>
      </div>
      </div>
    </div>
    <div class="col-lg-3 mb-3">
  <div class="card">
      <img src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Sunset</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Incidunt repellendus praesentium quae!</p>
       <a href="" class="btn btn-outline-success btn-sm">Read More</a>
      </div>
      </div>
    </div>
  </div>
</div>
</section>

          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Attractions