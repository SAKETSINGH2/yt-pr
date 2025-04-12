import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBarMenu } from "./redux/SideBarSilce";
import { GOOGLE_SEARCH_SUGGESTIONS_API } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { setSearchText } from "./redux/SearchTextSlice";
import { cachedResult } from "./redux/SearchSlice";

const Head = () => {
    const sideMenu = useSelector((store) => store.sideBar.sideBar);
    const searchText = useSelector((store) => store.searchText.searchText);
    const search = useSelector((store) => store.search);
    const [isVisible, setIsVisible] = useState(false);
    const [searchSuggestionsData, setSearchSuggestionsData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleToggel = (data) => {
        dispatch(toggleSideBarMenu(data));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (search[searchText]) {
                setSearchSuggestionsData(search[searchText]);
            } else {
                searchSuggestions();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, [searchText]);

    const clickHandler = () => {
        navigate("list");
    };

    const searchSuggestions = async () => {
        const searchData = await fetch(
            GOOGLE_SEARCH_SUGGESTIONS_API + searchText
        );
        const response = await searchData.json();
        setSearchSuggestionsData(response[1]);
        dispatch(cachedResult({ [searchText]: response[1] }));
    };

    return (
        // <div className="flex justify-between p-2">
        //     <div className="flex items-center gap-x-3">
        //         <img
        //             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
        //             alt="side-icon"
        //             className="w-[2rem] h-[2rem]"
        //             onClick={() => handleToggel(!sideMenu)}
        //         />
        //         <img
        //             src="./images/youtube.png"
        //             alt="logo"
        //             className="w-[5rem] h-[3rem]"
        //         />
        //     </div>
        //     <div className="flex items-center">
        //         <div className="relative">
        //             <input
        //                 // value={searchText}
        //                 type="text"
        //                 className="border border-gray-300 rounded-l-full px-4 py-1 w-[500px] outline-none h-[40px] text-[16px] font-semibold text-gray-700"
        //                 onChange={(event) =>
        //                     dispatch(setSearchText(event.target.value))
        //                 }
        //                 onFocus={() => setIsVisible(true)}
        //                 onBlur={() => setIsVisible(false)}
        //             />
        //             {isVisible && (
        //                 <ul className="absolute bg-white z-10 w-full rounded-lg shadow-sm shadow-black">
        //                     {searchSuggestionsData.map((data, index) => (
        //                         <div className="flex items-center px-4 hover:bg-gray-200 rounded-lg m-1">
        //                             <img
        //                                 src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
        //                                 alt="search-icon"
        //                                 loading="lazy"
        //                                 className="w-[15px] h-[15px]"
        //                             />
        //                             <li className="px-2 text-[16px] font-semibold m-1 focus:hidden">
        //                                 {data}
        //                             </li>

        //                             {/* <hr /> */}
        //                         </div>
        //                     ))}
        //                 </ul>
        //             )}
        //         </div>
        //         <div className="bg-gray-100 rounded-r-full px-4 py-2 flex items-center border border-gray-200">
        //             <img
        //                 src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
        //                 alt="search-icon"
        //                 className="w-[20px] h-[24px]"
        //                 onClick={() => clickHandler()}
        //             />
        //         </div>
        //     </div>
        //     <img
        //         src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
        //         alt="profile-icon"
        //         className="w-[3rem] h-[3rem] rounded-full"
        //     />
        // </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between items-center justify-between p-2 gap-4 sm:gap-6 shadow-sm">
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
                    alt="menu"
                    className="w-7 h-7 cursor-pointer"
                    onClick={() => handleToggel(!sideMenu)}
                />
                <img
                    src="./images/youtube.png"
                    alt="logo"
                    className="w-24 h-10 object-contain"
                />
                <div className="block sm:hidden">
                    <img
                        src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
                        alt="profile"
                        className="w-9 h-9 rounded-full"
                    />
                </div>
            </div>

            <div className="flex w-full sm:w-[60%] items-center relative">
                <input
                    type="text"
                    className="flex-1 border border-gray-300 px-4 py-2 rounded-l-full text-sm text-gray-800 focus:outline-none"
                    onChange={(e) => dispatch(setSearchText(e.target.value))}
                    onFocus={() => setIsVisible(true)}
                    onBlur={() => setIsVisible(false)}
                />
                <div
                    className="bg-gray-100 rounded-r-full px-4 py-2 border border-l-0 border-gray-300 cursor-pointer"
                    onClick={clickHandler}
                >
                    <img
                        src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                        alt="search"
                        className="w-5 h-5"
                    />
                </div>

                {isVisible && (
                    <ul className="absolute top-11 bg-white w-full z-50 shadow-lg rounded-md max-h-60 overflow-y-auto">
                        {searchSuggestionsData.map((data, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                            >
                                <img
                                    src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                                    alt="icon"
                                    className="w-4 h-4"
                                />
                                {data}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="hidden sm:block">
                <img
                    src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                />
            </div>
        </div>
    );
};
export default Head;
