const express=require("express");
const router=express.Router();

const { commentsController }=require("../controllers/comments");

//get routes
router.get("/:id", commentsController.getComments)

//post routes
router.post("/create/:id", commentsController.postComments);

module.exports.commentsRouter=router;