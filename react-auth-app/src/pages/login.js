import React, { useState } from "react";
import Button from "../components/button";
import { useAuth } from "../context/auth-context";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password);
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginTop: "50px",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </label>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
