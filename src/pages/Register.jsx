import React from 'react'
import '../styles/register.css'
import { useState, useEffect } from 'react';
import axios from 'axios';



   

function Register() {
    const [users, setUsers] = useState([]);
  

  return (
    <div class="register-main-container">
    <div class="row">
        <div class="col-7">
            <div className="main-text">
                <h1><span className='main'>Welcome!</span><br /> <span>SRI</span> LANKA</h1>
                <p>Discover the anticipation of your upcoming island retreat
                and indulge in the distinct adventures that this island gem has in store for you.</p>
            </div>
        </div>
        <div class="col-5">
            <div className="register">
            <form className='register-form'>
                <div class="form-group">
                    <label for="username">Username or Email</label>
                    <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Username or Email"/>
                    
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password"/>
                </div>
                <div class="form-group">
                    <label for="cpassword">Confirm Password</label>
                    <input type="password" class="form-control" id="cpassword" placeholder="Confirm Password"/>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Remeber me</label>
                </div>
                <div class="form-group account">
                    <p>Already have an account? <a href="">Sign in</a></p>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Register