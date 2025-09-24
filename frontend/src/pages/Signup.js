import React, { useState } from 'react';
import { registerUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await registerUser(username, email, password);
      alert('Signup successful! Please login.');
      navigate('/login'); // Redirect to login page
    } catch {
      setError('Signup failed. Please check your details.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <button type="submit" className="btn btn-primary mt-2">Signup</button>
      </form>
      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  );
};

export default Signup;
