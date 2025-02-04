import { configureStore } from "@reduxjs/toolkit";
import sideMenuSlice from "./SideBarSilce";
import searchTextSlice from "./SearchTextSlice";

const store = configureStore({
    reducer: { sideBar: sideMenuSlice, searchText: searchTextSlice },
});

export default store;
