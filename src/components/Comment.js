import React from "react";

const Comment = ({ commentData }) => {
    // console.log("commentData", commentData);
    const { name, comment } = commentData;

    return (
        <div className="flex  rounded-md p-0.5 m-1 items-center gap-x-2 shadow-md stroke-gray-500">
            <img
                className="w-7 h-7 rounded-full"
                alt="user"
                src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
            />
            <p className="text-[16px] font-semibold">{name}</p>
            <p className="text-[14px]">{comment}</p>
        </div>
    );
};

export default Comment;
