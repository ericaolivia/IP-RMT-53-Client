import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/request";

export const fetchUserProfile = createAsyncThunk(
  "profile/fetchUserProfile",
  async () => {
    const response = await axios({
      method: "get",
      url: "/profile",
      headers:{
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    });
    console.log(response.data);
    return response.data;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    id: "",
    name: "",
    imageUrl: "",
    loading: false,
    error: null,
  },
  reducers: {
    updateProfile: (state, action) => {
      state.name = action.payload.name;
      state.imageUrl = action.payload.imageUrl;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.id = action.payload.id;        
        state.name = action.payload.name;
        state.imageUrl = action.payload.imageUrl;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
