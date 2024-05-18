import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifiedError, setIsVerifiedError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!firstName.trim()) {
      setFirstNameError("First Name is required");
      return;
    } else {
      setFirstNameError("");
    }

    if (!lastName.trim()) {
      setLastNameError("Last Name is required");
      return;
    } else {
      setLastNameError("");
    }

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

    if (!isVerified) {
      setIsVerifiedError("Please agree to terms");
      return;
    } else {
      setIsVerifiedError("");
    }

    try {
      await axios.post("http://localhost:4000/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
        isVerified,
      });
      navigate("/login");
    } catch (err) {
      console.log("Error:", err.message);
      // Handle error as needed
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {firstNameError && <span className="error">{firstNameError}</span>}
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {lastNameError && <span className="error">{lastNameError}</span>}
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span className="error">{emailError}</span>}
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <span className="error">{passwordError}</span>}
          </div>
          <div className="input-field">
            <label>
              <input
                type="checkbox"
                checked={isVerified}
                onChange={(e) => setIsVerified(e.target.checked)}
              />
              Agree to terms and conditions
            </label>
            {isVerifiedError && (
              <span className="error">{isVerifiedError}</span>
            )}
          </div>
          <button type="submit">Register</button>
        </form>
        <div className="login-link">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
