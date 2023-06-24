import { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <h1>Login Here!</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <GoogleButton
          onClick={handleGoogleSignIn}
          style={{ textAlign: "center", width: "reset", height: "reset" }}
          type="dark"
        />
        <div>
          <h3>
            Don't have an account?{" "}
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>{" "}
            here
          </h3>
          <h3>
            <Link to="/forget-password">Forget Password?</Link>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Login;
