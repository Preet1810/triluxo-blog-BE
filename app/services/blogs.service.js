const { Blogs }=require("../models/blog.model");
const BasicService=require("./basic.service");

class blogsService extends BasicService {
    constructor() {
        super(Blogs)
    }
}

module.exports.blogsService=new blogsService();