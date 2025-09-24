import React, { useState, useEffect } from 'react';
import API from '../api';
import { useParams, Link, useNavigate } from 'react-router-dom';

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    API.get(`blogs/${id}/`)
      .then(res => setBlog(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('Delete blog?')) return;
    try {
      await API.delete(`blogs/${id}/`);
      alert('Deleted');
      nav('/');
    } catch (err) {
      alert('Delete failed');
    }
  };

  if (!blog) return <div>Loading...</div>;

  // Determine if logged-in user is the author
  const userId = parseInt(localStorage.getItem('user_id')); // store user ID on login
  const isAuthor = userId && blog.author === userId;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>By {blog.author_username} • {new Date(blog.created_at).toLocaleString()}</p>
      <div style={{ whiteSpace: 'pre-wrap' }}>{blog.content}</div>

      {isAuthor && (
        <div className="mt-3">
          <Link className="btn btn-secondary me-2" to={`/blogs/${id}/edit`}>Edit</Link>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default BlogDetail;
