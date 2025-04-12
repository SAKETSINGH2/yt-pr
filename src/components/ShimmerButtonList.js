import React from "react";

const ShimmerButtonList = () => {
    return (
        <div>
            <ul className="flex flex-wrap justify-center gap-2">
                {Array(10)
                    .fill("")
                    .map((_, index) => (
                        <li
                            key={index}
                            className="bg-gray-200 py-1 px-8 rounded-md animate-pulse"
                        >
                            &nbsp;
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ShimmerButtonList;
