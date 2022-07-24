import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AllShowItems from './AllShowItems';
import { fetchPosts } from './postsSlice';
const ShowItems = () => {
    const { loading, posts, error } = useSelector(state => state.postsReducer);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    return (
        <div className='px-12'>
            <h1 className='text-4xl text-purple-800 font-bold mb-2'>All Items</h1>
            {loading && <h1 className='text-4xl font-bold text-indigo-600'>Loading...</h1>}
            {error && <h3>{error}</h3>}
            <div className='grid grid-cols-2 md:grid-cols-4'>
                {
                    posts.map(post => <AllShowItems key={post._id} post={post}></AllShowItems>)
                }
            </div>
        </div>
    );
};

export default ShowItems;