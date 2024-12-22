import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FeaturePanel = () => {
    const sideMenu = useSelector((state) => state.sideBar.sideBar);

    if (!sideMenu) {
        return null;
    }
    return (
        <div className="shadow-sm p-2 font-semibold text-[1rem] ml-2">
            <ul className="space-y-5">
                <div className="flex gap-x-3 bg-gray-100 px-4 py-2 rounded-xl cursor-pointer">
                    <img
                        src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                        alt="home-icon"
                        loading="lazy"
                        className="w-[20px]"
                    />
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                </div>
                <div className="flex gap-x-3 bg-gray-100 px-4 py-2 rounded-xl cursor-pointer">
                    <img
                        src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png"
                        alt="home-icon"
                        loading="lazy"
                        className="w-[20px]"
                    />
                    <li>Shorts</li>
                </div>
                <div className="flex gap-x-3 bg-gray-100 px-4 py-2 rounded-xl cursor-pointer">
                    <img
                        src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                        alt="home-icon"
                        loading="lazy"
                        className="w-[20px]"
                    />
                    <li>Subsciptions</li>
                </div>
            </ul>
            <hr className="bg-gray-500 mt-5 mb-5" />
            <ul className="space-y-5">
                <li className="text-[18px] font-semibold">
                    You
                    <div>
                        <div className="flex gap-x-3 p-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                History
                            </li>
                        </div>
                        <div className="flex gap-x-3 p-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                Playlists
                            </li>
                        </div>

                        <div className="flex gap-x-3 p-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                Your videos
                            </li>
                        </div>

                        <div className="flex gap-x-3 p-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                Watch later
                            </li>
                        </div>

                        <div className="flex gap-x-3 p-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                Liked videos
                            </li>
                        </div>
                    </div>
                </li>
            </ul>
            <hr className="bg-gray-500 mt-5 mb-5" />
            <ul className="space-y-5">
                <li className="text-[18px] font-semibold">
                    Subscriptions
                    <div>
                        <div className="flex gap-x-3 p-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                History
                            </li>
                        </div>
                        <div className="flex gap-x-3 p-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                Playlists
                            </li>
                        </div>

                        <div className="flex gap-x-3 p-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                Your videos
                            </li>
                        </div>

                        <div className="flex gap-x-3 p-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                Watch later
                            </li>
                        </div>

                        <div className="flex gap-x-3 p-2 ">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                Liked videos
                            </li>
                        </div>
                    </div>
                </li>
            </ul>
            <hr className="bg-gray-500 mt-5 mb-5" />
            <ul className="space-y-5">
                <li className="text-[18px] font-semibold">
                    Explore
                    <div>
                        <div className="flex gap-x-3 p-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                History
                            </li>
                        </div>
                        <div className="flex gap-x-3 p-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                Playlists
                            </li>
                        </div>

                        <div className="flex gap-x-3 p-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                Your videos
                            </li>
                        </div>

                        <div className="flex gap-x-3 p-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                Watch later
                            </li>
                        </div>

                        <div className="flex gap-x-3 p-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/25/25694.png"
                                alt="home-icon"
                                loading="lazy"
                                className="w-[20px]"
                            />
                            <li className="text-[16px] text-gray-700">
                                Liked videos
                            </li>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default FeaturePanel;
