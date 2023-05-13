import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchingHotelListByRegion = createAsyncThunk(
  "hotelListByRegion/fetchingHotelListByRegion",
  async () => {
    try {
      const res = await axios.get( `https://api.npoint.io/afb3a628439194ee15f7`);
      console.log(res.data)
      return res.data.resorts;
    } catch (error) {
      console.log(error);
    }
  }
);
