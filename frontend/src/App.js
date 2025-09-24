import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import BlogForm from './pages/Blogform';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />   {/* 👈 Default Home Page */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/create" element={<BlogForm />} />
          <Route path="/blogs/:id/edit" element={<BlogForm />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
