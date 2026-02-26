// features/movieByIdSlice.js
import { createSlice } from '@reduxjs/toolkit';

const movieByIdSlice = createSlice({
  name: 'movieById',
  initialState: null,
  reducers: {
    setMovieById: (state, action) => {
      return action.payload;
    },
    clearMovieById: () => {
      return null;
    }
  }
});

export const { setMovieById, clearMovieById } = movieByIdSlice.actions;

export default movieByIdSlice.reducer;
