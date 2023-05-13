import { configureStore } from "@reduxjs/toolkit";
import hotelSlice from "./slice"

const store = configureStore({
    reducer: {
        hotel: hotelSlice
    }
})

export default store;