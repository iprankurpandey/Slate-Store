import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function Authentication({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("token");

  return token ? (
    children
  ) : (
    <Navigate to="/LoginPage" state={{ from: location }} replace />
  );
}

export default Authentication;
