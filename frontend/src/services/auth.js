// src/services/auth.js
import API from '../api';

// Signup function
export const registerUser = async (username, email, password) => {
  try {
    const response = await API.post('register/', { username, email, password });
    return response.data;
  } catch (error) {
    console.error('Signup error:', error.response?.data || error.message);
    throw error;
  }
};

// Login function
export const loginUser = async (username, password) => {
  try {
    const response = await API.post('token/', { username, password });
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    throw error;
  }
};
