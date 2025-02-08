import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/themeSlice'
import draggingReducer from '../features/dragging/draggingSlice'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        dragging: draggingReducer
    }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch