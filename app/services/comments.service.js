const { Comments }=require("../models/comment.model");
const BasicService=require("./basic.service");

class commentService extends BasicService {
    constructor() {
        super(Comments)
    }
}

module.exports.commentService=new commentService();