import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FeaturePanel = () => {
    const sideMenu = useSelector((state) => state.sideBar.sideBar);

    if (!sideMenu) return null;

    return (
        <div className="p-2 text-[1rem] font-semibold ml-2 shadow-sm w-full sm:w-[250px]">
            <ul className="space-y-4">
                <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl cursor-pointer">
                    <img
                        src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                        alt="home-icon"
                        className="w-5 h-5"
                        loading="lazy"
                    />
                    <Link to="/">
                        <li className="text-sm sm:text-base">Home</li>
                    </Link>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl cursor-pointer">
                    <img
                        src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png"
                        alt="shorts-icon"
                        className="w-5 h-5"
                        loading="lazy"
                    />
                    <span className="text-sm sm:text-base">Shorts</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl cursor-pointer">
                    <img
                        src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                        alt="subscriptions-icon"
                        className="w-5 h-5"
                        loading="lazy"
                    />
                    <span className="text-sm sm:text-base">Subscriptions</span>
                </div>
            </ul>

            <hr className="my-5 border-t border-gray-300" />

            {/* YOU Section */}
            <ul className="space-y-4">
                <li className="text-[17px] font-semibold">You</li>
                {[
                    "History",
                    "Playlists",
                    "Your videos",
                    "Watch later",
                    "Liked videos",
                ].map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-3 px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-lg"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                            alt={`${item}-icon`}
                            className="w-5 h-5"
                            loading="lazy"
                        />
                        <span className="text-sm text-gray-700">{item}</span>
                    </div>
                ))}
            </ul>

            <hr className="my-5 border-t border-gray-300" />

            {/* SUBSCRIPTIONS */}
            <ul className="space-y-4">
                <li className="text-[17px] font-semibold">Subscriptions</li>
                {[
                    "History",
                    "Playlists",
                    "Your videos",
                    "Watch later",
                    "Liked videos",
                ].map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-3 px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-lg"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                            alt={`${item}-icon`}
                            className="w-5 h-5"
                            loading="lazy"
                        />
                        <span className="text-sm text-gray-700">{item}</span>
                    </div>
                ))}
            </ul>

            <hr className="my-5 border-t border-gray-300" />

            {/* EXPLORE */}
            <ul className="space-y-4">
                <li className="text-[17px] font-semibold">Explore</li>
                {[
                    "History",
                    "Playlists",
                    "Your videos",
                    "Watch later",
                    "Liked videos",
                ].map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-3 px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-lg"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                            alt={`${item}-icon`}
                            className="w-5 h-5"
                            loading="lazy"
                        />
                        <span className="text-sm text-gray-700">{item}</span>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default FeaturePanel;
