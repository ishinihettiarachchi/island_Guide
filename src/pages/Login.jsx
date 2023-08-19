import React from 'react'
import '../styles/login.css'
import logo from '../images/logo.png';

function Login() {
  return (
    <div class="login-main-container">
    <div class="row">
        <div class="col-lg-7">
        <div className="logo">
               <img src={logo} alt="" />
            </div>
            <div className="main-text">
                <h1><span className='main'>Hello!</span><br /> <span>SRI</span> LANKA</h1>
                <p>Discover the anticipation of your upcoming island retreat
                     and indulge in the distinct adventures that this island gem has in store for you.</p>
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-5">
            <div className="login">
            <form className='login-form'>
                <div class="form-group">
                    <label for="username">Username or Email</label>
                    <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Username or Email"/>
                    
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password"/>
                </div>
                <div class="form-group no-account">
                    <p>Don't have an account? <a href="">sign up</a></p>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Login