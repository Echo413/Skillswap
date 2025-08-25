import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import LoginPage from "../Pages/LoginPage";
import Dashboard from "../Pages/DashboardPage";
import MatchPage from "../Pages/MatchPage";
import SignUpPage from "../Pages/SignUpPage";
import SignUpDetails from "../Pages/SignUpDetails";
import ProfilePage from "../Pages/ProfilePage";

export default function AppRoutes({ isAuthenticated, setIsAuthenticated }) {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/details" element={<SignUpDetails setIsAuthenticated={setIsAuthenticated}/>}/>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/matches"
        element={
          isAuthenticated ? <MatchPage /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/profile"
        element={
          isAuthenticated ? <ProfilePage /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}
