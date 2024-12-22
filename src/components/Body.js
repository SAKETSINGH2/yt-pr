import React from "react";
import FeaturePanel from "./FeaturePanel";
import VideoContainer from "./VideoContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="flex h-screen">
            <div className="p-5 overflow-y-auto">
                <FeaturePanel />
            </div>
            <div className="flex-1 overflow-y-auto">
                {/* <VideoContainer /> */}
                <Outlet />
            </div>
        </div>
    );
};

export default Body;
