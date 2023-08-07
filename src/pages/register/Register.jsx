import React from 'react'
import './register.css'


function Register() {
  return (
    <div class="container">
    <div class="row">
        <div class="col-7">
            <div className="main-text">
                <h1><span>Welcome!</span><br /> SRI LANKA</h1>
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
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Register