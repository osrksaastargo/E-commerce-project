import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      return;
    } else {
      setPasswordError("");
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          email,
          password,
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      const userId = response.data.userId;
      localStorage.setItem("userId", userId);
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="input-field">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="error">{emailError}</div>}
          </div>
          <div className="input-field">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
          <div className="login-buttons">
            <button className="login-btn" type="submit">
              Login
            </button>
            <button className="reset-btn" type="reset">
              Reset
            </button>
          </div>
          <div className="login-register">
            <span>
              Don't have an account?{" "}
              <Link to="/register">
                <b>Register here</b>
              </Link>
            </span>
          </div>
          <div className="forgot">
            <span>Forgot Password?</span>
            <Link to="/reset-password">
              <span>Click Here</span>
            </Link>
          </div>
        </form>
      </div>
      <div className="login-image">
        <img src="./images/rocket.png" alt="pic" />
      </div>
    </div>
  );
};

export default Login;
