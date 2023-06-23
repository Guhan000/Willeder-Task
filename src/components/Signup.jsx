import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: "20px" }}>
          <h1>Signup Here!</h1>
          <input type='email' placeholder='Enter Email' />
          <input type='email' placeholder='Enter Password' />
          <button type="submit">Log In</button>
          <h3>Already have an account? <span>
            <Link to="/login">
              Login
            </Link>
          </span> here</h3>
        </div>
      </div>
    </div>
  )
}

export default Signup