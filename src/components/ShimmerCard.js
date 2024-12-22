import React from "react";

const ShimmerCard = () => {
    return (
        <div className="flex flex-wrap">
            {Array(12)
                .fill("")
                .map((_, index) => (
                    <div className="w-[300px] h-[200px] rounded-xl m-2 bg-gray-200 animate-pulse"></div>
                ))}
        </div>
    );
};

export default ShimmerCard;
