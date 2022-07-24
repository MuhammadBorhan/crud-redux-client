import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "../features/postsSlice"

const store = configureStore({
    reducer: {
        postsReducer: postsReducer
    }
})

export default store;