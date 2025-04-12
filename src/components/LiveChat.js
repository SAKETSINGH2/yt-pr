import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLiveChat } from "./redux/LiveChatSlice";
import LiveChatMessages from "./LiveChatMessages";
import { generatedRandomId, generateRandomName } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");

    console.log("liveMessage", liveMessage);
    const dispatch = useDispatch();
    const liveChatMessages = useSelector((store) => store.live);

    console.log("liveChat", liveChatMessages);

    useEffect(() => {
        let timer = setInterval(() => {
            //Api Polling
            dispatch(
                addLiveChat({
                    message: generatedRandomId(),
                    name: generateRandomName(),
                })
            );
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <div>
                <div className="max-h-[455px] overflow-y-scroll">
                    {liveChatMessages.messages.map((liveChatMessage, index) => {
                        return <LiveChatMessages messages={liveChatMessage} />;
                    })}
                </div>
                <div className="flex m-2 gap-x-1">
                    <input
                        className="bg-gray-200 w-full border border-red-500 px-2 rounded-md shadow-md shadow-red-500 outline-none "
                        type="text"
                        placeholder="Enter your message"
                    />
                    <button
                        onClick={(e) => {
                            setLiveMessage(e.target.value);
                        }}
                        className="bg-red-500 rounded-md text-semibold cursor-pointer px-2 py-1"
                        type="button"
                    >
                        Send
                    </button>
                </div>
            </div>
        </>
    );
};

export default LiveChat;
