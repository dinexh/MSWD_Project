import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';
import authImage from "../../Assets/auth_Image.jpg.avif";
import "./auth.css";
import axios from 'axios';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.pathname === '/login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location.pathname]);

  const toggleForm = () => {
    navigate(isLogin ? '/register' : '/login');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (!isLogin && formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match!');
        return;
      }

      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const response = await axios.post(`http://localhost:5000${endpoint}`, {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      
      toast.success(isLogin ? 'Logged in successfully!' : 'Signed up successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="Auth-container">
      <div className="Auth-container-in">
        <div className="Auth-container-in-one">
          <img src={authImage} className='AuthLogo' alt="Authentication" />
        </div>
        <div className="Auth-container-in-two">
          <ToastContainer />
          <div className="Auth-container-heading">
            <h2>{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
            <p>{isLogin ? 'Enter your credentials to continue' : 'Get started with your free account'}</p>
          </div>
          <form onSubmit={handleSubmit} className="Auth-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
              </div>
            )}
            <button type="submit" className="cta-btn-2">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>
          <div className="toggle-form">
            <p>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button type="button" onClick={toggleForm} className="toggle-btn">
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
