import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';

function Auth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      navigate('/Dashboard');
    } else {
      navigate('/Dashboard');
    }
  };
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="Auth">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit} className="Auth-form">
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
          />
        </div>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input 
              type="password" 
              id="confirmPassword" 
              name="confirmPassword" 
              required 
            />
          </div>
        )}
        <button type="submit" className="cta-btn-2">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <div className="toggle-form">
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button type="button" onClick={toggleForm} className="toggle-btn">
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Auth;
