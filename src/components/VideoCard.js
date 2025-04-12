import React from "react";

const VideoCard = ({ video }) => {
    const { snippet, statistics } = video;
    const { thumbnails, title, channelTitle } = snippet;
    let maxTitleLength = 50;

    return (
        <div className="w-full sm:w-[300px] lg:w-[360px] rounded-xl p-1">
            <img
                className="w-full rounded-md"
                src={thumbnails.standard?.url}
                alt="thumbnail"
                loading="lazy"
            />
            <div className="flex gap-x-4 mt-2">
                <img
                    className="rounded-full w-[40px] h-[40px]"
                    src={thumbnails.default.url}
                    alt="profile-image"
                />
                <p className="font-semibold text-ellipsis overflow-hidden max-w-full sm:max-w-[240px]">
                    {title.length <= maxTitleLength ? (
                        <span>{title}</span>
                    ) : (
                        <span>{title.slice(0, maxTitleLength) + "..."}</span>
                    )}
                </p>
            </div>

            <p className="text-gray-700 ml-16 text-sm sm:text-base">
                {channelTitle}
            </p>
            <p className="text-gray-700 ml-16 text-[13px]">
                {statistics.viewCount > 1000000 ? (
                    <span>
                        {Math.floor(statistics.viewCount / 1000000)}M views
                    </span>
                ) : (
                    <span>
                        {Math.floor(statistics.viewCount / 1000)}K views
                    </span>
                )}
            </p>
        </div>
    );
};

export default VideoCard;
