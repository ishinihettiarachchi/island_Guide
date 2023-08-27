import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/place.css';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Place() {
    const {placeID } = useParams();
    const [place, setPlace] = useState([]);

    useEffect(() => {
        console.log("hello");
        axios.get(`http://localhost:3001/api/v1/places/${placeID}`)
          .then(place => setPlace(place.data))
          .catch(error => console.log(error));
      }, [placeID]);

    if (!place) {
        // Loading state
        return <div>Loading...</div>;
    }
    
    return (
        <div className='place-container'>
            <div className='place-container1'>
                <Navbar/>
                <div className="container place-description-container">
                    <h3 className='place-title'>{place.name}</h3>
                    <div className="row place-description">
                        <div className="col-5 place-image">
                            <img src={place.image} alt={place.name} />
                        </div>
                        <div className="col-7 place-text">
                            <p>{place.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Place;
