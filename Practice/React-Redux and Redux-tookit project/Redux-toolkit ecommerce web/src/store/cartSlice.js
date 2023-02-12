
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        
        add(state,action){
            state.push(action.payload);
        },

        remove (state,action){
         return state.filter((item)=>item.id !== action.payload)
        }
    }
});

export const {add, remove} = cartSlice.actions;

export default cartSlice.reducer;


// OR..........

// import { createSlice } from "@reduxjs/toolkit";

// const initialTheme = [];


// const cartSlice = createSlice({
//     name: 'theme',
//     initialState: initialTheme,
//     reducers: {
//         add(state, action){
//             state.push(action.payload);
//         },

//     }
// });

// export const {add, } = cartSlice.actions;
// export default cartSlice.reducer;