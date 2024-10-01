import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navi from './components/nav_in/navi'; 
import Auth from './pages/auth/auth';
import Home from './pages/home/home';
import Dashboard from './pages/dashboard/dash';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === '/home' && <Navi />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
