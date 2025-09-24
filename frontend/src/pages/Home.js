import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h2>Welcome to Omnify Blog</h2>
      <p>Select an option to continue:</p>

      <div className="d-grid gap-3 col-6 mx-auto mt-4">
        <Link className="btn btn-primary" to="/login">Login</Link>
        <Link className="btn btn-success" to="/signup">Signup</Link>
        <Link className="btn btn-info" to="/blogs">Blog List</Link>
        <Link className="btn btn-warning" to="/blogs/create">Create Blog</Link>
      </div>
    </div>
  );
}

export default Home;
