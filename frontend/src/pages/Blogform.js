import React, {useState, useEffect} from 'react';
import API from '../api';
import { useNavigate, useParams } from 'react-router-dom';

function BlogForm(){
  const { id } = useParams();
  const isEdit = !!id;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    if (isEdit) {
      API.get(`blogs/${id}/`).then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setPublished(res.data.published);
      }).catch(err => console.error(err));
    }
  }, [id, isEdit]);

  const onSubmit = async e => {
    e.preventDefault();
    try {
      if (isEdit) {
        await API.put(`blogs/${id}/`, { title, content, published });
        alert('Updated');
      } else {
        await API.post('blogs/', { title, content, published });
        alert('Created');
      }
      nav('/');
    } catch(err) { alert('Save failed'); console.error(err); }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>{isEdit ? 'Edit Blog' : 'Create Blog'}</h3>
      <div className="mb-2"><input className="form-control" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required/></div>
      <div className="mb-2"><textarea className="form-control" rows="8" placeholder="Content" value={content} onChange={e=>setContent(e.target.value)} required/></div>
      <div className="mb-2 form-check">
        <input className="form-check-input" type="checkbox" checked={published} onChange={e=>setPublished(e.target.checked)} id="published"/>
        <label className="form-check-label" htmlFor="published">Published</label>
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );
}
export default BlogForm;
