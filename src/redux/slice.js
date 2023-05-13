import { createSlice } from "@reduxjs/toolkit";
import { fetchingHotelListByRegion } from "./services";

const initialState = {
  hotelListByRegion: [],
  status: "idle",
  error: null,
};

const hotelSlice = createSlice({
  name: "photographers",
  initialState,
  reducers: {
    setSelectedYoga: (state, action) => {
      state.yogaCategorieId = action.payload;
    },
  },
  extraReducers: {
    [fetchingHotelListByRegion.pending]: (state) => {
      state.status = "loading";
    },
    [fetchingHotelListByRegion.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.hotelListByRegion = action.payload;
    },
    [fetchingHotelListByRegion.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { setSelectedYoga } = hotelSlice.actions;

export default hotelSlice.reducer;
