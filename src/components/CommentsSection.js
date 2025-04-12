import CommentList from "./CommentList";

const comments = [
    {
        name: "Saket",
        comment: "nice video",
        replies: [
            {
                name: "Saket",
                comment: "nice video",
                replies: [
                    {
                        name: "Saket",
                        comment: "nice video",
                        replies: [
                            { name: "Saket", comment: "nice video" },
                            {
                                name: "SHyam",
                                comment: "good",
                                replies: [
                                    { name: "Saket", comment: "nice video" },
                                    {
                                        name: "SHyam",
                                        comment: "good",
                                        replies: [
                                            {
                                                name: "Saket",
                                                comment: "nice video",
                                            },
                                            {
                                                name: "SHyam",
                                                comment: "good",
                                                replies: [
                                                    {
                                                        name: "Saket",
                                                        comment: "nice video",
                                                    },
                                                    {
                                                        name: "SHyam",
                                                        comment: "good",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    { name: "SHyam", comment: "good" },
                ],
            },
        ],
    },
    { name: "SHyam", comment: "good" },
    { name: "XYZ", comment: "nice video" },
    { name: "Test", comment: "nice" },
    { name: "VYX", comment: "mst" },
    { name: "Yes", comment: "1 number" },
];

const CommentSection = () => {
    return (
        <div className="h-[400px] overflow-y-scroll">
            <h2 className="font-bold m-2 sticky top-0 z-10 text-white rounded-sm pl-5 bg-gray-600 py-2">
                Comments :
            </h2>
            <CommentList comments={comments} />
        </div>
    );
};

export default CommentSection;
