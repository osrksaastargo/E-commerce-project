import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState("");
  const { id, token } = useParams();
  const history = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:4000/api/auth/${id}/${token}`,
        {
          password: password,
        }
      );

      if (response.data.status === 201) {
        setLoading(false);
        setPassword("");
        setSuccess(true);
        setTimeout(() => {
          history("/login");
        }, 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const userValid = async (id, token) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/auth/forgot-password/${id}/${token}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res.data;

      if (data.status === 201) {
        console.log("user valid");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    userValid(id, token);
  }, []);

  const setVal = (e) => {
    setPassword(e.target.value);
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
        <h1 style={{ marginBottom: "10px" }}>Enter Your New Password</h1>
        {loading && "Loading..."}
        {success && (
          <span style={{ color: "green", marginBottom: "10px" }}>
            Password Successfully Updated
          </span>
        )}
        <label>
          <b>New Password</b>
        </label>
        <input
          onChange={setVal}
          value={password}
          type="password"
          placeholder="Enter Your Password"
          style={{
            marginBottom: "10px",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <button
          style={{
            backgroundColor: "grey",
            cursor: "pointer",
            width: "100px",
            height: "30px",
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

export default ForgotPassword;
