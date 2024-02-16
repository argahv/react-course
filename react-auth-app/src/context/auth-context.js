// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import api, { endpoints } from "../utils/axios";
import { getItem, setItem } from "../utils/localStorage";

const AuthContext = createContext();

const user = getItem("user");

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username, password) => {
    const res = await api.post(endpoints.auth.login, {
      username,
      password,
    });

    setItem("user", res.data);
  };

  const checkToken = () => {
    const token = user?.token;

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const logout = () => {
    setIsAuthenticated(false);
  };
  console.log("isAuthenticated", isAuthenticated);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};

export { AuthContextProvider, useAuth };
