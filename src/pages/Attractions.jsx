import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/attractions.css'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';


function Attractions() {
  const [places, setPlaces] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const placesPerPage = 8;
  const pagesVisited = pageNumber * placesPerPage;

  const displayPlaces = places.slice(pagesVisited, pagesVisited+placesPerPage)
  .map(places => {
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
  });

  const pageCount = Math.ceil(places.length/placesPerPage)
 
  const changePage = ({selected}) => {
      setPageNumber(selected)
  }

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
        displayPlaces
      }
      <div className="paging">
        <ReactPaginate 
        
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={ "previousBtton"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            previousClassName={pageNumber === 0 ? "hidden" : ""}
        />
     
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