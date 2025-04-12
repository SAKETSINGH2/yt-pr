import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
    return (
        <div>
            {comments?.map((comment, index) => (
                <div key={index}>
                    <Comment commentData={comment} />
                    <div className="ml-10 border border-l-black">
                        {/* at this time replies is what replies is simply a list of comments */}
                        <CommentList comments={comment?.replies} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
