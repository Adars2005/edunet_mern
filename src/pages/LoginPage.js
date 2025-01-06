import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Send login request to the backend
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }), // Send email and password
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login (store token, redirect, etc.)
        console.log('Login successful:', data);
        // For example, store the token in local storage (or any state management)
        localStorage.setItem('token', data.token);
        history.push('/'); // Redirect to the dashboard or a protected route
      } else {
        // Handle error (e.g., incorrect email/password)
        console.error('Login failed:', data.message);
        alert('Login failed: ' + data.message); // Show an alert to the user
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="link">
        <Link to="/signup">Don't have an account? Sign up</Link>
      </div>
    </div>
  );
};

export default LoginPage;
