// src/pages/auth/auth.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';

function Auth() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    // Simple validation. Replace with real authentication logic.
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password.');
      return;
    }

    // Simulate authentication success
    // In a real app, you'd verify credentials here
    navigate('/home');
  };

  return (
    <div className="Auth">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="Auth-form">
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={credentials.username} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={credentials.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="cta-btn">Login</button>
      </form>
    </div>
  );
}

export default Auth; // Ensure this is a default export
