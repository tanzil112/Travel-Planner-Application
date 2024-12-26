import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false); 
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !username || !password || !confirmPassword) {
      setMessage('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    if (!termsAccepted) {
      setMessage('You must accept the terms and conditions.');
      return;
    }

    const user = { name, username, password };

    try {
      const response = await axios.post('http://localhost:8083/api/auth/register', user);
      setMessage(response.data); // Success message from backend
    } catch (error) {
      setMessage(error.response ? error.response.data : 'An error occurred, please try again.');
    }
  };

  return (
    <div className="background-container">
      <div className="login-form">
        <h2 className="form-header">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="login-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '🔒'}
              </span>
            </div>
          </div>
          <div className="input-group">
            <label>Confirm Password:</label>
            <div className="password-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                className="login-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? '👁️' : '🔒'}
              </span>
            </div>
          </div>
          <div className="input-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              <NavLink to="/terms" style={{color:"white"}} >Accept terms and conditions</NavLink>
              
            </label>
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Register;