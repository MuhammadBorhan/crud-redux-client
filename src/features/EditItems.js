import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatePosts } from './postsSlice';

const EditItems = () => {
    const location = useLocation();
    const [id, setId] = useState(location.state.id)
    const [title, setTitle] = useState(location.state.title);
    const [body, setBody] = useState(location.state.body);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleEdit = e => {
        e.preventDefault();
        // const data = { title, body }
        dispatch(updatePosts(id, title, body))
        navigate('/showitem', { replace: true })
    }
    return (
        <div>
            <h1 className='text-4xl text-purple-800 font-bold'>Edit Items</h1>
            <form onSubmit={handleEdit} className='flex flex-col items-center gap-2 mt-4'>
                <div className="form-control">
                    <label className="input-group input-group-lg">
                        <span>Title</span>
                        <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} className="input input-bordered input-group-lg" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Body</span>
                        <input type="text" name='body' value={body} onChange={(e) => setBody(e.target.value)} className="input input-bordered input-group-lg" />
                    </label>
                </div>
                <button type='submit' className='btn'>Edit</button>
            </form>
        </div>
    );
};

export default EditItems;