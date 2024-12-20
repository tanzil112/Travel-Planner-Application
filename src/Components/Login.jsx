import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app'; // Importing modular Firebase
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth'; // Importing auth functions
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBIMI5SexFE4eajxOT-DzM1QSXdd2zS-fg",
  authDomain: "sign-in-184d9.firebaseapp.com",
  projectId: "sign-in-184d9",
  storageBucket: "sign-in-184d9.firebasestorage.app",
  messagingSenderId: "846225488576",
  appId: "1:846225488576:web:24edc7925d274ea9a4cb25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get Auth instance

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null); // State for the logged-in user
  const navigate = useNavigate();

  // Handle authentication state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (person) => {
      if (person) {
        setUser(person);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

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

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider); // Use signInWithPopup with the Google provider
      navigate('/dashboard2');
    } catch (err) {
      console.log(err);
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
          <center>
            {user ? (
              <div>
                
                <button onClick={() => signOut(auth)}>Sign Out</button>
              </div>
            ) : (
              <button onClick={signInWithGoogle}>
                <FontAwesomeIcon icon={faGoogle} style={{ marginRight: "8px" }} />
                Sign In With Google
              </button>
            )}
          </center>
        </div>
      </div>
    </div>
  );
}

export default Login;