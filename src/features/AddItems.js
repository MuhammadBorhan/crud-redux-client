import React from 'react';
import { useDispatch } from 'react-redux';
import { createPosts } from './postsSlice';
import { useNavigate } from 'react-router-dom'

const AddItems = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const posts = {
            title: e.target.title.value,
            body: e.target.body.value
        };
        // setValue(posts);
        dispatch(createPosts(posts))
        navigate('/showitem', { replace: true })
    }
    return (
        <div>
            <h1 className='text-4xl text-purple-800 font-bold'>Add Items</h1>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2 mt-4'>
                <div className="form-control">
                    <label className="input-group input-group-lg">
                        <span>Title</span>
                        <input type="text" name='title' placeholder="Enter Title" className="input input-bordered input-group-lg" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Body</span>
                        <input type="text" name='body' placeholder="Enter Body" className="input input-bordered input-group-lg" />
                    </label>
                </div>
                <button type='submit' className='btn'>Add</button>
            </form>
        </div>
    );
};

export default AddItems;