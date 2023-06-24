import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { forgetPassword } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      console.log(email);
      forgetPassword(email);
      setEmail("");
      setMessage("Email sent. Check your Email!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <h1>Forget Password</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
        <hr />
        <Link to="/">
          <button>Login</button>
        </Link>
        {message && <p style={{ color: "#535bf2" }}>{message}</p>}
      </form>
    </div>
  );
};

export default ForgetPassword;
