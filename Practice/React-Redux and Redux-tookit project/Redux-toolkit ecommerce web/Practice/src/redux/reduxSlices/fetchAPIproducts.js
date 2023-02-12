// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const STATUES = Object.freeze({
//     LODING: 'loding',
//     IDLE: 'idle',
//     ERROR: 'error'
// });

// const fetchAPIproducts = createSlice({
//     name: 'productsAPI',
//     initialState: {
//         data: [],
//         status: STATUES.IDLE,
//     },

//     extraReducers: (builder)=>{
//         builder
//         .addCase(fetchApidata.pending,(state, action)=>{
//             state.status = STATUES.LOADING;
//         })
//         .addCase(fetchApidata.fulfilled,(state, action)=>{
//             state.data = action.payload;
//             state.status = STATUES.IDLE;
//         })
//         .addCase(fetchApidata.rejected, (state, action)=>{
//             state.status = STATUES.ERROR;
//         })
//     }


// });

// export default fetchAPIproducts.reducer;

// export const fetchApidata = createAsyncThunk('product/fetch', async() =>{
//     const res = await fetch('https://fakestoreapi.com/products');
//     const data = await res.json();
//     return data;   
// }) 



import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

export const fetchAPIproducts = createSlice({

    name: 'product',

    initialState: {
        data: [],
        status: STATUES.IDLE,
    },

    reducers: {
       
    },

    extraReducers: (builder)=>{
        builder
        .addCase(fetchApidata.pending, (state, action)=>{
            
            state.status = STATUES.LOADING;
        })
        .addCase(fetchApidata.fulfilled, (state,action)=>{
            state.data = action.payload;
            state.status = STATUES.IDLE;
        })
        .addCase(fetchApidata.rejected,(state,action)=>{
            state.status = STATUES.ERROR;
        })
    }

});

export default fetchAPIproducts.reducer;




// in redux toolkit createAsyncThunk use to call api for better error handling like promises. here products/ fetch is an identifires
export const fetchApidata = createAsyncThunk('products/fetch', async ()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})

