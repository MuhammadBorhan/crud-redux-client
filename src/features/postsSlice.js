import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    // const res = await axios.get("http://localhost:5000/posts");
    // return res.data;
    return fetch('http://localhost:5000/posts').then(res => res.json())
});

export const createPosts = createAsyncThunk('posts/createPosts', async (posts) => {
    return fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(posts)
    }).then(res => res.json())
});

export const updatePosts = createAsyncThunk('posts/updatePosts', async (data) => {
    const { id } = data;
    return fetch(`http://localhost:5000/posts/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
});

export const deletePosts = createAsyncThunk('posts/deletePosts', async (id) => {
    return fetch(`http://localhost:5000/posts/${id}`, {
        method: 'DELETE',
    }).then(res => res.json())
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: false,
        posts: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = null;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.payload;
        });

    },
});

export default postsSlice.reducer;