import { configureStore } from "@reduxjs/toolkit";
import sideMenuSlice from "./SideBarSilce";

const store = configureStore({ reducer: { sideBar: sideMenuSlice } });

export default store;
