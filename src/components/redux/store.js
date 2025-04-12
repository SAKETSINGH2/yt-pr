import { configureStore } from "@reduxjs/toolkit";
import sideMenuSlice from "./SideBarSilce";
import searchTextSlice from "./SearchTextSlice";
import searchSlice from "./SearchSlice";
import liveSlice from "./LiveChatSlice";

const store = configureStore({
    reducer: {
        sideBar: sideMenuSlice,
        searchText: searchTextSlice,
        search: searchSlice,
        live: liveSlice,
    },
});

export default store;
