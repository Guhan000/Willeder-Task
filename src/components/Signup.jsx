import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      setEmail("");
      setPassword("");
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: "20px" }}>
        <h1>Signup Here!</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input type='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
        <h3>Already have an account? <span>
          <Link to="/">
            Login
          </Link>
        </span> here</h3>
      </form>
    </div>
  )
}

export default Signup