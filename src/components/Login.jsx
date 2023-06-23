import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';

const Login = () => {
  return (
    <div>
      <div style={{display:'flex', flexDirection:'column', gap:"20px"}}>
        <h1>Login Here!</h1>
        <input type='email' placeholder='Enter Email' />
        <input type='email' placeholder='Enter Password'/>
        <button type="submit">Log In</button>
        <GoogleButton
            style={{textAlign:'center', width:"reset", height:"reset"}}
            type="dark"
            onClick={() => console.log("hi")}
        />
        <h3>Don't have an account? <span>
          <Link to="/signup">
              Sign Up
          </Link>
          </span> here</h3>
      </div>
    </div>
  )
}

export default Login