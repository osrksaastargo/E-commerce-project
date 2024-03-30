import React, { useState } from "react";
import axios from "axios";

const PasswordReset = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const setVal = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // Retrieve JWT token from local storage or wherever it is stored
      const token = localStorage.getItem("jwtToken");

      const response = await axios.post(
        "http://localhost:4000/api/auth/sendPasswordLink",
        {
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setEmail("");
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "10px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Enter Your Email</h1>
        {success ? (
          <span style={{ color: "green", marginBottom: "10px" }}>
            Password Reset Link Sent Successfully In Your Email
          </span>
        ) : null}
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            value={email}
            onChange={setVal}
            name="email"
            id="email"
            type="email"
            placeholder="Enter Your Email"
          />
        </form>
        <button
          style={{
            backgroundColor: "grey",
            marginTop: "10px",
            marginLeft: "80px",
            cursor: "pointer",
            width: "100px",
            height: "25px",
            border: "2px solid green",
            borderRadius: "10px",
          }}
          type="submit"
          onClick={handleClick}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default PasswordReset;
