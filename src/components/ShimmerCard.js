import React from "react";

const ShimmerCard = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {Array(12)
                .fill("")
                .map((_, index) => (
                    <div
                        key={index}
                        className="w-[300px] h-[200px] rounded-xl m-2 bg-gray-200 animate-pulse"
                    ></div>
                ))}
        </div>
    );
};

export default ShimmerCard;
