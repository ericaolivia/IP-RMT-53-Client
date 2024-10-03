import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/request';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
  const response = await axios.get('/api/recipes');
  return response.data;
});

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default recipesSlice.reducer;
