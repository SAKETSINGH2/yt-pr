import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {}, // object kyu ki searching O(1) me hogi as comapare to array
    reducers: {
        cachedResult: (state, action) => {
            const newObj = Object.assign(state, action.payload);
            state = newObj;
            // return action.payload;
        },
    },
});

export const { cachedResult } = searchSlice.actions;

export default searchSlice.reducer;
