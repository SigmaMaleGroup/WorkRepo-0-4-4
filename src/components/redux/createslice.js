import { createSlice } from '@reduxjs/toolkit';



console.log(localStorage.getItem('currentPage'))

const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: localStorage.getItem('currentPage') || 'home',
  reducers: {
    changePage: (state, action) => {
      // Если action.payload не определен, то состояние останется прежним
      if (action.payload !== undefined) {
        console.log(action.payload)
        return action.payload;
      }
      ;
    },
  },
});

export const { changePage } = currentPageSlice.actions;

export default currentPageSlice.reducer;