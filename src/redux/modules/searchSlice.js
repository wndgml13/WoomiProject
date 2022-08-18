import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  search: [],
  isLoading: false,
  isFinish: false,
  error: null,
};

export const __searchTitle = createAsyncThunk(
  "search/__searchTitle",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `https://jdh3340.shop/api/search?title=${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      throw error;
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: {
    [__searchTitle.pending]: (state, action) => {
      state.isLoading = true;
      state.isFinish = false;
    },
    [__searchTitle.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.search = action.payload;
    },
    [__searchTitle.rejected]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.error = action.payload;
    },
  },
});

export default searchSlice.reducer;
