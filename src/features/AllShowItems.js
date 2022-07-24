import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePosts } from './postsSlice';
import { Link } from 'react-router-dom';

const AllShowItems = ({ post }) => {
    const { _id, title, body } = post;
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deletePosts(id))
    }
    return (
        <div className='p-6 bg-black text-white m-2'>
            <h3><span className='text-2xl font-bold text-green-700'>Title:</span> {title}</h3>
            <p><span className='text-xl font-bold text-indigo-700'>Body:</span> {body}</p>
            <div className='flex gap-2 justify-center p-4'>
                <Link to='/edititem' state={{ id: _id, title, body }}><button className="btn btn-info">Edit</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
            </div>
        </div>
    );
};

export default AllShowItems;