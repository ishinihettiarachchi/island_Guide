import React from 'react';
import '../styles/register.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../images/logo.png';

function Register() {

  return (
    <div className="register-main-container">
      <div className ="row">
        <div className=" col-lg-7">
            <div className="logo">
               <img src={logo} alt=""/>
            </div>
          <div className="main-text">
            <h1>
              <span className="main">Welcome!</span>
              <br /> <span>SRI</span> LANKA
            </h1>
            <p>
              Discover the anticipation of your upcoming island retreat and
              indulge in the distinct adventures that this island gem has in
              store for you.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5">
          <div className="register">
            <form className="register-form">
              <div className="form-group">
                <label htmlFor="username">Username or Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="Enter Username or Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <div className="form-group account">
                <p>
                  Already have an account? <a href="">Sign in</a>
                </p>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
