import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imageUrl: '', 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.imageUrl = action.payload.imageUrl;
    },
    logout(state) {
      state.imageUrl = ''; 
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
