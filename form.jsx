import React, { useState } from "react";

import "../App.css";

import { Routes, Route, useNavigate } from "react-router-dom";

import { Box } from "@mui/system";

function Workmain() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  const [pass, setPass] = useState("");

  const [conf, setConf] = useState("");

  const [res, setRes] = useState("");

  function handleClick() {
    navigate("/");
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "username") {
      setUser(value);
    }

    if (id === "password") {
      setPass(value);
    }

    if (id === "confirm") {
      setConf(value);
    }
  };

  const handleSubmit = () => {
    console.log(
      "username:",
      user,
      "Password:",
      pass,
      "Confirm Password:",
      conf
    );
  };

  // console.log("username:",user,"Password:",pass,"Confirm Password:",conf);

  // console.log(user);

  // console.log(pass);

  // console.log(conf);

  return (
    <div>
      <Box
        style={{
          height: "30em",
          width: "30em",
          background: "yellow",
          marginLeft: "30em",
        }}
      >
        <h2>Welcome to signup</h2>

        <form>
          <h4> Username:</h4>

          <textarea
            id="username"
            value={user}
            onChange={handleInputChange}
            required
          />

          <h4>Password</h4>

          <textarea
            type="Password"
            placeholder="password"
            value={pass}
            id="password"
            onChange={handleInputChange}
            required
          />

          <h4>Confirm Password</h4>

          <input
            type="Password"
            placeholder="password"
            value={conf}
            id="confirm"
            onChange={handleInputChange}
            required
          />

          <h4>
            {" "}
            <button onClick={() => handleSubmit()}> Signup</button>
          </h4>

          <button onClick={handleClick}>Back to home </button>

          <button onClick={(e) => handleClick(e)}>Back to home </button>
        </form>
      </Box>
    </div>
  );
}

export default Workmain;
