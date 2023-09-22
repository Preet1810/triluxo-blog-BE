const express=require("express");
const router=express.Router();
const { blogsController }=require("../controllers/blogs")

//get routes
router.get("/", blogsController.getAllBlogs)
router.get("/:id", blogsController.getParticularBlog)

//post routes
router.post("/create", blogsController.createBlog);
module.exports.blogsRouter=router;
