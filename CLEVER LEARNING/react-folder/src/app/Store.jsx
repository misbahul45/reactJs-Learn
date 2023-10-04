import { configureStore } from "@reduxjs/toolkit";
import CarSlice from "../features/car/CarSlice";
export const store= configureStore  ({
    reducer: {
        car: CarSlice,
    }
})