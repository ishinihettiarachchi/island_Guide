import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/attractions.css'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom'


function Attractions() {
  const [places, setPlaces] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [input, setInput] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setPageNumber(0);
  }, [input]);

  const placesPerPage = 8;
  const pagesVisited = pageNumber * placesPerPage;


  const displayPlaces = filteredPlaces.slice(pagesVisited, pagesVisited + placesPerPage)
  .map(place => {
    return  <div class="col-lg-3 mb-3">
          <div class="card place">
            <img src={place.image} alt="" class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">{place.name}</h5>
              <p class="card-text">{place.description}</p>
              <Link to={`/attractions/${place._id}`}className="btn btn-outline-success btn-sm">
                  Read More
              </Link>

            </div>
           </div>
          </div>
  });


  const pageCount = Math.ceil(filteredPlaces.length / placesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/places')
      .then(response => {
        const filtered = response.data.filter(place =>
          place.name.toLowerCase().includes(input.toLowerCase())
        );
        setPlaces(response.data);
        setFilteredPlaces(filtered);
      })
      .catch(err => console.log(err));
  }, [input]);
  


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
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Search attractions..."/>
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
            previousLinkClassName={ "previousBttn"}
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