import { createSlice } from "@reduxjs/toolkit";

const sideMenuSlice = createSlice({
    name: "sideBar",
    initialState: { sideBar: true },
    reducers: {
        toggleSideBarMenu: (state, action) => {
            state.sideBar = action.payload;
        },
    },
});
export const { toggleSideBarMenu } = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
