import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/place.css';
import Footer from '../components/Footer';
import { useParams,Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Place() {
    const {placeID } = useParams();
    const [places, setPlace] = useState([]);

    useEffect(() => {
        console.log("hello");
        axios.get(`http://localhost:3001/api/v1/places/${placeID}`)
          .then(response => setPlace(response.data))
          .catch(error => console.log(error));
      }, [placeID]);

    if (!places) {
        // Loading state
        return <div>Loading...</div>;
    }
    
    return (
        <div className='place-container'>
            <div className='place-container1'>
                <Navbar/>
                <div className="container place-description-container">
                    
                    <div className="row place-description" key={places._id}>
                    <h3 className='place-title'>{places.name}</h3>
                        <div className="col-5 place-image">
                            <img src={places.image} alt={places.name} />
                        </div>
                        <div className="col-7 place-text">
                            <p>{places.description}</p>
                        </div>
                        {places.images && (
            <div className="place-images">
              <img src={places.images.image1} alt="Image 1" />
              <img src={places.images.image2} alt="Image 2" />
              <img src={places.images.image3} alt="Image 3" />
              <img src={places.images.image4} alt="Image 4" />
            </div>
          )}
          
                    </div>
                </div>
            </div>
            <div className=" place-text-back">
                    <Link to="/attractions" className='back-text'>Back to Explore</Link>
            </div>
            <Footer/>
        </div>
    );
}

export default Place;
