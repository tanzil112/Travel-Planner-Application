import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
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
      setMessage(response.data); // Success message from backend
      if (response.data === 'Login successful!') {
        navigate('/dashboard'); // Redirect to dashboard on successful login
      }
    } catch (error) {
      setMessage(error.response ? error.response.data : 'An error occurred, please try again.');
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const response = await axios.post('http://localhost:8083/api/auth/google-login', {
        token: credentialResponse.credential,
      });

      if (response.data === 'Google login successful!') {
        navigate('/dashboard'); // Redirect to dashboard on successful login
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      setMessage('Google login failed. Please try again.');
    }
  };

  return (
    <GoogleOAuthProvider clientId="407110337259-5684q5p59vl4blv3spdofohvp5t57gg4.apps.googleusercontent.com
">
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
              <input
                type="password"
                placeholder="Enter your password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>
              Don't have an account? <Link to="/register">Signup</Link>
            </p>
            <button type="submit" className="login-button">Login</button>
          </form>
          <br></br>
          <div className="google-login">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => setMessage('Google login failed. Please try again.')}
            />
          </div>
          {message && <p>{message}</p>}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
