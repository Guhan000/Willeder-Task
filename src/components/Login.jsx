import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div style={{display:'flex', flexDirection:'column', gap:"20px"}}>
        <h1>Login Here!</h1>
        <input type='email' placeholder='Enter Email' />
        <input type='email' placeholder='Enter Password'/>
        <button type="submit">Log In</button>
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