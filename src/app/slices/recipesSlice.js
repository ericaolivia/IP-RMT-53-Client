import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/request';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
  // const response = await axios.get('/api/recipes');
  const response = await axios({
    method: 'get',
    url: "/api/recipes", 
    headers:{
      Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
  })
  return response.data;
});

export const fetchRecipeDetail = createAsyncThunk(
  'recipes/fetchRecipeDetail',
  async (id) => {
    // const response = await axios.get(`/api/recipes/detail/${id}`);
    const response = await axios({
      method: 'get',
      url: `/api/recipes/detail/${id}`,
      headers:{
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })
    return response.data;
  }
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    recipeDetail: null, 
    loading: false,
    detailLoading: false,
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
    
    builder
      .addCase(fetchRecipeDetail.pending, (state) => {
        state.detailLoading = true;
      })
      .addCase(fetchRecipeDetail.fulfilled, (state, action) => {
        state.detailLoading = false;
        state.recipeDetail = action.payload;
      })
      .addCase(fetchRecipeDetail.rejected, (state) => {
        state.detailLoading = false;
      });
  },
});

export default recipesSlice.reducer;
