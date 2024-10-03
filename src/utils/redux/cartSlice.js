import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            items: []
        },

        reducers: {
            addItems: (state, action) => {
                state.items.push(action.payload)
            },
            removeItem:(state,action)=>{
                state.items.pop();
            },
            clearCart:(state)=>{
                state.items.length=0;
            }

        }

    },


)
export const allCartItems = (state)=>state.cart.items
export const itemCount = (state)=>state.cart.items.length
export const{addItems,removeItem,clearCart}= cartSlice.actions;
export default cartSlice.reducer;