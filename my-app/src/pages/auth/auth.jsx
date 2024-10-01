import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; 
import authImage from "../../Assets/auth_Image.jpg.avif";
import "./auth.css";
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      toast.success('Logged in successfully!');
      navigate('/Dashboard');
    } else {
      toast.success('Signed up successfully!');
      navigate('/Dashboard'); 
    }
  };

  return (
    <div className="Auth-container">
      <div className="Auth-container-in">
        <div className="Auth-container-in-one">
          <img src={authImage} className='AuthLogo' alt="" />
        </div>
        <div className="Auth-container-in-two">
        <ToastContainer />
        <div className="Auth-container-heading">
        <h2>{isLogin ? 'Enter Your Credentials!' : 'Get Started!'}</h2>
        </div>
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
      </div>
    </div>
  );
};

export default Auth;
