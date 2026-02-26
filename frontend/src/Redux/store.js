import { configureStore } from '@reduxjs/toolkit'
import movieByIdReducer from './Features/movieByIdSlice'

export const store = configureStore({
  reducer: {
   MovieById :movieByIdReducer,
  },
});