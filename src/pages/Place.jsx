import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/place.css';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
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
                    <h3 className='place-title'>{places.name}</h3>
                    <div className="row place-description">
                        <div className="col-5 place-image">
                            <img src={places.image} alt={places.name} />
                        </div>
                        <div className="col-7 place-text">
                            <p>{places.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Place;
