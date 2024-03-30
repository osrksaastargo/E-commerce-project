import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");

    setEmailError("");
    setPasswordError("");
  };

  return (
    <div className="login">
      <div className="container">
        <div className="left">
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className="box">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {emailError && <div className="error">{emailError}</div>}
            <div className="box">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {passwordError && <div className="error">{passwordError}</div>}
            <div className="login-buttons">
              <button className="login" type="submit">
                Login
              </button>
              <button className="reset" type="reset">
                Reset
              </button>
            </div>
            <div className="register">
              <span>
                You don't have an account, Please{" "}
                <Link to="/register">
                  <b>Register</b>
                </Link>
              </span>
            </div>
            <div className="forgot">
              <b>Forgot Password</b>

              <Link to="/reset-password">
                <span>Click Here</span>
              </Link>
            </div>
          </form>
        </div>

        <div className="right">
          <div className="pic">
            <img src="./images/rocket.png" alt="pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
