import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Please enter both username and password.');
      return;
    }

    const user = { username, password };

    try {
      const response = await axios.post('http://localhost:8083/api/auth/login', user);
      setMessage(response.data); 
      if (response.data === 'Login successful!') {
        navigate('/dashboard2'); 
      }
    } catch (error) {
      setMessage(error.response ? error.response.data : 'An error occurred, please try again.');
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>User Name:</label>
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
            <p>
              Don't have an account? <Link to="/register">Signup</Link>
            </p>
            <button type="submit" className="login-button">Login</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;