import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar(){
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('access_token');
  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Omnify Blog</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <>
                <li className="nav-item"><Link className="nav-link" to="/blogs/create">Create</Link></li>
                <li className="nav-item"><button className="btn btn-outline-secondary" onClick={logout}>Logout</button></li>
              </>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
