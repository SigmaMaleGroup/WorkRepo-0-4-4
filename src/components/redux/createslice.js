import { createSlice } from '@reduxjs/toolkit';

const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: localStorage.getItem('currentPage') || 'home',
  reducers: {
    changePage: (state, action) => {
      // Если action.payload не определен, то состояние останется прежним
      if (action.payload !== undefined) {
        return action.payload;
      }
      return state;
    },
  },
});

export const { changePage } = currentPageSlice.actions;

export default currentPageSlice.reducer;