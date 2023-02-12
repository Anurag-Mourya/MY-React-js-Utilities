import { createSlice } from "@reduxjs/toolkit";

const initialTheme = {
    color: '',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initialTheme,
    reducers: {
        // toRed: (state, action)=>{
        //     state.color = action.payload;
        // }

        toRed(state, action){
            state.color = action.payload;
        }
    }
});

export const {toRed,} = themeSlice.actions;
export default themeSlice.reducer;