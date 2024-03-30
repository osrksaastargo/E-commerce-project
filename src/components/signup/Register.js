import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/auth/register", {
        userName,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      if (err.response) {
        // Server responded with a status code outside the range of 2xx
        if (err.response.status === 500) {
          // Internal Server Error
          console.log("Internal Server Error. Please try again later.");
        } else {
          // Other server errors
          console.log("Server Error:", err.response.data.message);
        }
      } else if (err.request) {
        // The request was made but no response was received
        console.log("Request Error:", err.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.log("Error:", err.message);
      }
    }

    if (userName.trim() === "") {
      setUserNameError("UserName is required");
    } else {
      setUserNameError("");
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
    setUserName("");
    setEmail("");
    setPassword("");
    setUserNameError("");
    setEmailError("");
    setPasswordError("");
  };

  return (
    <div className="register">
      <div className="container">
        <div className="left">
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className="box">
              <label htmlFor="userName">UserName: </label>
              <input
                type="text"
                name="userName"
                placeholder="Enter Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            {userNameError && <div className="error">{userNameError}</div>}
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
              <button className="register" type="submit">
                Register
              </button>
              <button className="reset" type="reset">
                Reset
              </button>
            </div>
            <div className="login">
              <span>
                Already u have an account, Please{" "}
                <Link to="/login">
                  <b>Login</b>
                </Link>
              </span>
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

export default Register;
