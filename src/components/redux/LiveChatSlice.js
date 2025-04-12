import { createSlice } from "@reduxjs/toolkit";

const LiveSlice = createSlice({
    name: "live",
    initialState: { messages: [] },
    reducers: {
        addLiveChat: (state, action) => {
            // state.messages.splice(20, 1);

            state.messages.push(action.payload);
            // const newObj = Object.assign(state, action.payload);
            // return newObj;

            if (state.messages.length > 20) {
                state.messages.shift();
            }
        },
    },
});

export const { addLiveChat } = LiveSlice.actions;
export default LiveSlice.reducer;
