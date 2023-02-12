import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 10,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incriment: (state, action)=>{
            state.count += 1;
        },

        drecriment: (state, action)=>{
            state.count -= action.payload;
        },

        
        incrementByAmount: (state, action)=>{
            state.count += action.payload;
        }
    }
});

export const {incriment,drecriment, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;