import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";

 const store = configureStore({
  reducer: {
    // this is your cart reducer for managing cart items
    cart: cartSlice,
  },
});

export default store;
