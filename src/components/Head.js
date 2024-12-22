import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBarMenu } from "./redux/SideBarSilce";
import { GOOGLE_SEARCH_SUGGESTIONS_API } from "../utils/constant";

const Head = () => {
    const sideMenu = useSelector((store) => store.sideBar.sideBar);
    const [searchText, setSearchText] = useState("Akshay");

    const dispatch = useDispatch();

    const handleToggel = (data) => {
        dispatch(toggleSideBarMenu(data));
    };

    console.log("print serachText", searchText);

    const inputChangeHandler = (e) => {
        console.log("called input and print the value :", e.target.value);
        setSearchText(e.target.value);
    };

    useEffect(() => {
        searchSuggestions();
    }, [searchText]);

    console.log(
        "GOOGLE_SEARCH_SUGGESTIONS_API + searchText",
        GOOGLE_SEARCH_SUGGESTIONS_API + searchText
    );

    const searchSuggestions = async () => {
        const searchData = await fetch(
            GOOGLE_SEARCH_SUGGESTIONS_API + searchText
        );
        const response = await searchData.json();
        // console.log("response", response);
    };

    return (
        <div className="flex justify-between p-2">
            <div className="flex items-center gap-x-3">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
                    alt="side-icon"
                    className="w-[2rem] h-[2rem]"
                    onClick={() => handleToggel(!sideMenu)}
                />
                <img
                    src="./images/youtube.png"
                    alt="logo"
                    className="w-[5rem] h-[3rem]"
                />
            </div>
            <div className="flex items-center">
                <input
                    // value={}
                    type="text"
                    className="border border-gray-300 rounded-l-full px-4 py-1 w-[500px] outline-none h-[40px] text-[16px] font-semibold text-gray-700"
                    onChange={inputChangeHandler}
                />
                <div className="bg-gray-100 rounded-r-full px-4 py-2 flex items-center border border-gray-200">
                    <img
                        src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                        alt="search-icon"
                        className="w-[20px] h-[24px]"
                    />
                </div>
            </div>

            <img
                src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
                alt="profile-icon"
                className="w-[3rem] h-[3rem] rounded-full"
            />
        </div>
    );
};
export default Head;
