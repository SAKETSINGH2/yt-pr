import React from "react";
import { YOUTUBE_VIDEOS_LIST_BY_SEARCH_API } from "../utils/constant";
import { useEffect, useState } from "react";
import SearchVideosCard from "./SearchVideosCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchVideosList = () => {
    const [searchVideos, setSearchVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchText = useSelector((store) => store.searchText.searchText);

    useEffect(() => {
        getVideosBySearch();
    }, [searchText]);
    const getVideosBySearch = async () => {
        const videos = await fetch(
            YOUTUBE_VIDEOS_LIST_BY_SEARCH_API + searchText
        );
        const response = await videos.json();
        setSearchVideos(response.items);
        setLoading(false);
    };
    return (
        <div>
            {loading ? (
                <p>loading</p>
            ) : (
                <div className="flex flex-wrap">
                    {searchVideos.map((data) => (
                        <Link to={"/watch?v=" + data.id.videoId}>
                            <SearchVideosCard searchVideos={data} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchVideosList;
