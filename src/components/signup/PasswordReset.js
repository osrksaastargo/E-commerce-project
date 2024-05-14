import React, { useState } from "react";
import axios from "axios";

const PasswordReset = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const setVal = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    } finally {
      setLoading(false); // Reset loading state after API call completes
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
        <h1 style={{ marginBottom: "10px" }}>Enter Your Email</h1>
        {loading ? "Loading..." : null}
        {success ? (
          <span style={{ color: "green", marginBottom: "10px" }}>
            Password Reset Link Sent Successfully In Your Email
          </span>
        ) : null}
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email" style={{ marginBottom: "5px" }}>
            <b>Email</b>
          </label>
          <input
            value={email}
            onChange={setVal}
            name="email"
            id="email"
            type="email"
            placeholder="Enter Your Email"
            style={{
              marginBottom: "10px",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </form>
        <button
          style={{
            backgroundColor: "grey",
            marginTop: "10px",
            cursor: "pointer",
            width: "100px",
            height: "30px",
            border: "2px solid green",
            borderRadius: "10px",
            textAlign: "center",
            paddingBottom: "25px",
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
