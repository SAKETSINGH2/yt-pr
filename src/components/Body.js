import React from "react";
import FeaturePanel from "./FeaturePanel";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="flex h-screen">
            <div className="overflow-y-auto">
                <FeaturePanel />
            </div>
            <div className="flex-1 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Body;
