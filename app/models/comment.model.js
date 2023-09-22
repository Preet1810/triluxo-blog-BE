const mongoose=require("mongoose");

const CommentSchema=new mongoose.Schema({
    userId: {
        type: String,
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId
    },
    comment: {
        type: String
    }
},

    { timestamps: true })

module.exports.Comments=mongoose.model("Comments", CommentSchema);