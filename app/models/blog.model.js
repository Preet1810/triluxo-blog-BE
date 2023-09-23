const mongoose=require("mongoose");

const BlogSchema=new mongoose.Schema({
    title: {
        type: String,
    },
    summary: {
        type: String,
    },
    image: {
        type: Array
    },
    video: {
        type: Array
    },
    content: {
        type: String
    },
    userId: {
        type: String
    }
},

    { timestamps: true })

module.exports.Blogs=mongoose.model("Blogs", BlogSchema);