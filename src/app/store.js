import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './slices/recipesSlice';
import profileReducer from './slices/profileSlice';
import favoritesReducer from './slices/favoritesSlice';

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    profile: profileReducer,
    favorites: favoritesReducer,
  },
});

export default store;