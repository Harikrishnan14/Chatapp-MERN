import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        desc: {
            type: String
        },
        likes: [],
        Image: {
            type: String
        }
    },
    { timestamps: true }
)

const PostModel = mongoose.model("posts", PostSchema);
export default PostModel
