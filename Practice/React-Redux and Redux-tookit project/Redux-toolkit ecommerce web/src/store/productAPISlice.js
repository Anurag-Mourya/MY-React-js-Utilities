
// import { createSlice } from '@reduxjs/toolkit';

// // this is the our request status.. status may be loading, idle, error..
// // we put here api status. And we don't want to change it...

// // and we reuse this object in multiple components..
// export const STATUES = Object.freeze({
//     IDLE: 'idle',
//     ERROR: 'error',
//     LOADING: 'loading'
// });

// export const productAPISlice = createSlice({
//     name: 'product',

//     initialState: {

//         // data is the list of our product in come from setProducts reducers
//         data: [],


//         //    this is bydefault api status....
//         status: STATUES.IDLE,
//     },

//     reducers: {
//         setProducts(state, action) {
//             // when we get data from action we set on data array
//             state.data = action.payload;

//             // we do not do any asynchronus call in our reducers.. like api call for the api call we use thunk middleware
//         },

//         setStatus(state, action){
//             // say the status when the api is loading like loading...
//             // and when it is called the status is changed line no. 24.
//             state.status = action.payload;
//         }
//     }
// });

// export const { setProducts, setStatus} = productAPISlice.actions;

// export default productAPISlice.reducer;


// // Thunks==== in redux toolkit thunks is inbuild. Thunks is a normal funtion inside this funtion return a new funtion

// export function fetchProducts() {
//     return async function fetchProductsThunk(dispatch, getState) {

//         dispatch(setStatus(STATUES.LOADING));

//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();

//             // now we dispatch the data into data array through setProuct Reducer.
//             dispatch(setProducts(data));

//             dispatch(setStatus(STATUES.IDLE));
//         } catch (err) {
//             dispatch(setStatus(STATUES.ERROR));
//         }

//     }

// }






// By using createAsyncThunk

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

export const productAPISlice = createSlice({

    name: 'product',

    initialState: {
        data: [],
        status: STATUES.IDLE,
    },

    reducers: {
       
    },

    extraReducers: (builder)=>{
        builder
        .addCase(fetchProducts.pending, (state, action)=>{
            
            state.status = STATUES.LOADING;
        })
        .addCase(fetchProducts.fulfilled, (state,action)=>{
            state.data = action.payload;
            state.status = STATUES.IDLE;
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status = STATUES.ERROR;
        })
    }

});

export default productAPISlice.reducer;




// in redux toolkit createAsyncThunk use to call api for better error handling like promises. here products/ fetch is an identifires
export const fetchProducts = createAsyncThunk('products/fetch', async ()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})

