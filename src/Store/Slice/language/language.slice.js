import { createSlice } from '@reduxjs/toolkit';

const layoutDirectionSlice = createSlice({
  name: 'layoutDirection',
  initialState: {
    language: localStorage.getItem("language") || "ar",
  },
  reducers: {
    setLanguage: (state, action) => {
      localStorage.setItem("language", action.payload);
      state.language = action.payload ;
    },
  },
});

export const { setLanguage } = layoutDirectionSlice.actions;
export default layoutDirectionSlice.reducer;