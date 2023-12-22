import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./Features/basketSlics"
import resturantReducer from "./Features/resturantSlice"

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    resturant: resturantReducer
  },
})