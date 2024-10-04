import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
    reducer: {
        cartState: cartReducer,
    }
});



// steps for redux tool kit : 

// create store
// wrap app component under Provider and pass props store
// create slice
// register  reducer in store
