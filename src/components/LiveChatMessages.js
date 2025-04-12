import React from "react";

const LiveChatMessages = ({ messages }) => {
    console.log("message", messages);

    const { name, message } = messages;
    return (
        <div className="flex text-black items-center gap-x-1 flex-wrap m-1">
            <img
                src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
                alt="profile-icon"
                className="w-[2rem] h-[2rem] rounded-full"
            />

            <div className="font-semibold">{name}</div>
            <div>{message}</div>
        </div>
    );
};

export default LiveChatMessages;
