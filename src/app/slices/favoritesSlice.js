import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteRecipes: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteRecipes.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteRecipes = state.favoriteRecipes.filter(recipe => recipe.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
