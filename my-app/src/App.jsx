import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navi from './components/nav_in/navi'; 
import Auth from './pages/auth/auth';
import Home from './pages/home/home';
import Dashboard from './pages/dashboard/dash';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navi />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>      
      </div>
    </Router>
  );
}

export default App;
