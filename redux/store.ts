import { configureStore } from '@reduxjs/toolkit'
import { fetchApi } from './api/fetchApi'

export const store = configureStore({
  reducer: {
      [fetchApi.reducerPath]: fetchApi.reducer
  },
  middleware: getDefaultMiddleware => 
  getDefaultMiddleware().concat( [ fetchApi.middleware ] )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch