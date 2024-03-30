import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const ForgotPassword = () => {
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState("");
  const { id, token } = useParams();
  const history = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:4000/api/auth/${id}/${token}`,
        {
          password: password,
        }
      );
      console.log(password);

      if (response.data.status === 201) {
        setPassword("");
        setSuccess(true);
        history("/login");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
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
        <h1>Enter Your New Password</h1>
        {success ? (
          <span style={{ color: "green", marginBottom: "10px" }}>
            Password Successfully Updated
          </span>
        ) : null}
        <label>
          <b>New Password</b>
        </label>
        <input
          onChange={setVal}
          value={password}
          type="password"
          placeholder="Enter Your Password"
        />

        <button
          style={{
            backgroundColor: "grey",
            marginTop: "10px",
            marginLeft: "150px",
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

export default ForgotPassword;
