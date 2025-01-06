import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate for redirect after signup
import './LoginPage.css';
import './SignupPage.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to navigate to another page after signup

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form behavior

    const userData = { name, email, password };

    try {
      const response = await fetch('http://localhost:5000/signup', {  // Ensure the URL is correct
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect to login page on successful signup
        navigate('/login');
      } else {
        alert(result.message || 'Error signing up');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error signing up. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <div className="link">
        <Link to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default SignupPage;
