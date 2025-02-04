import React from "react";

const SearchVideosCard = ({ searchVideos }) => {
    const { snippet } = searchVideos;
    const { thumbnails, title, channelTitle } = snippet;

    let maxTitleLength = 70;

    return (
        <div className="w-[300px] rounded-xl m-2">
            <img
                className="rounded-md"
                src={thumbnails.medium.url}
                alt="thumbnail"
                loading="lazy"
            />
            <div className="flex gap-x-4 mt-2">
                <img
                    className="rounded-full w-[40px] h-[40px]"
                    src={thumbnails.default?.url}
                    alt="profile-image"
                />
                <p className="font-semibold">
                    {title.length <= maxTitleLength ? (
                        <p>{title}</p>
                    ) : (
                        <p>{title.slice(0, maxTitleLength) + "..."}</p>
                    )}
                </p>
            </div>

            <p className="text-gray-700 ml-16">{channelTitle}</p>
            {/* <p className="text-gray-700 ml-16 text-[13px]">
                {statistics.viewCount > 1000000 ? (
                    <p>{Math.floor(statistics.viewCount / 1000000)}M views</p>
                ) : (
                    <p>{Math.floor(statistics.viewCount / 1000)}K views</p>
                )}
            </p> */}
        </div>
    );
};

export default SearchVideosCard;
