const Response=require("../helpers/Response.helpers")
const { commentService }=require("../services/comments.service")


class commentsController {

    getComments=async (req, res) => {
        try {
            const comments=await commentService.findMany({ blogId: req.params.id })
            if (comments.length>0) {
                Response(res).message("Comments Found").body(comments).send();
            } else {
                Response(res).message("No Comments").body(comments).send();
            }
        } catch (error) {
            Response(res).status(401).error("Something Went Wrong").send();
        }
    }


    postComments=async (req, res) => {
        try {
            const comment=commentService.create({ ...req.body, blogId: req.params.id });
            Response(res).message("Comment Created Successfully").body(comment).send();
        } catch (error) {
            Response(res).status(401).error("Something Went Wrong").send();
        }
    }
}

module.exports.commentsController=new commentsController();