import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import ShimmerCard from "./ShimmerCard";
import ShimmerButtonList from "./ShimmerButtonList";
import { Link } from "react-router-dom";
// import { YOUTUBE_VIDEOS_API } from "../../utils/constant";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const vedios = await fetch(YOUTUBE_VIDEOS_API);
        const response = await vedios.json();
        if (response?.items?.length > 0) {
            setVideos(response.items);
            setLoading(false);
        } else {
            setLoading(true);
        }
    };

    // Early Return
    if (loading) {
        return (
            <div>
                <ShimmerButtonList />
                <div className="flex flex-wrap">
                    <ShimmerCard />
                </div>
            </div>
        );
    }

    return (
        <div className="shadow-xl">
            <div className="sticky top-0 bg-white overflow-auto">
                <ButtonList />
            </div>
            <div className="flex flex-wrap justify-center p-1">
                {videos.map((data) => (
                    <Link to={"/watch?v=" + data.id}>
                        <VideoCard video={data} />
                    </Link>
                ))}

                {/* <VideoCard video={videos[0]} /> */}
            </div>
        </div>
    );
};

export default VideoContainer;
