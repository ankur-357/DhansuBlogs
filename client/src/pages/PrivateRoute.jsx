import { Navigate, Outlet } from "react-router-dom";
import React from "react";
export default function PrivateRoute() {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
