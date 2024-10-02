// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartlist: [],
        total: 0,
    },
    reducers: {
        add(state, action) {
            // console.log(action.payload)

            const updatedCartList = state.cartlist.concat(action.payload)
            const update_total = state.total + action.payload.price; 
            return { ...state, cartlist: updatedCartList , total :update_total}

        },
        remove(state, action) {
            
            const updatedCartList = state.cartlist.filter(item => item.id !== action.payload.id )
            const update_total = state.total - action.payload.price; 
            return { ...state, cartlist: updatedCartList , total :update_total}
        }
    }
})


export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;