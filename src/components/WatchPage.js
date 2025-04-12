import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentSection from "./CommentsSection";
import LiveChat from "./LiveChat";
import VideoContainer from "./VideoContainer";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");

    return (
        <div className="m-5">
            <div className="sm:flex gap-x-5">
                <div className="">
                    <iframe
                        className="w-full h-[200px] sm:w-[800px] sm:h-[400px]"
                        // width="800"
                        // height="400"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title="YouTube video player"
                        // frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    <div className="flex p-1 bg-slate-200 mt-4 sm:p-3 items-center gap-x-3 rounded-md">
                        <img
                            src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
                            alt="profile-icon"
                            className="w-[3rem] h-[3rem] rounded-full"
                        />
                        <div>
                            <p className="font-bold">New Songs</p>
                            <p className="text-[12px] font-semibold">
                                800k subscribers <span>2 videos</span>
                            </p>
                            <p>welcome to everyone... more</p>
                        </div>
                        <div className=" px-1 rounded-xl bg-red-500 font-semibold sm:px-5 py-1">
                            Subscribe
                        </div>
                    </div>
                </div>
                <div className="bg-slate-100 mt-2 sm:mt-0 border border-black flex flex-col-reverse flex-1 rounded-md ">
                    <LiveChat />
                </div>
            </div>
            <div className="hidden sm:block mt-5 p-2">
                <CommentSection />
            </div>
        </div>
    );
};

export default WatchPage;
