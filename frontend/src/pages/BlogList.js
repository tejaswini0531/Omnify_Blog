import React, { useState, useEffect } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPage(page);
  }, [page]);

  const fetchPage = async (p) => {
    try {
      const res = await API.get(`blogs/?page=${p}`);
      setBlogs(res.data.results || []); // fallback to [] in case results is undefined
      setNext(res.data.next);
      setPrev(res.data.previous);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setBlogs([]); // prevent crash
    }
  };

  return (
    <div>
      <h3>Blogs</h3>

      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.id} className="card mb-2">
            <div className="card-body">
              <h5>
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </h5>
              <p className="mb-0">
                by {blog.author_username} •{" "}
                {new Date(blog.created_at).toLocaleString()}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}

      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-outline-primary"
          disabled={!prev}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Prev
        </button>
        <button
          className="btn btn-outline-primary"
          disabled={!next}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BlogList;
