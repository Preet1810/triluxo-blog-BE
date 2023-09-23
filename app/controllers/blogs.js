const Response=require("../helpers/Response.helpers")
const { blogsService }=require("../services/blogs.service")
const { uploadOnCloudinary, uploadVideosOnCloudinary }=require("../helpers/file-uploader");

class blogsController {


    getAllBlogs=async (req, res) => {
        try {
            const allBlogs=await blogsService.find()
            // console.log(allBlogs);
            Response(res).body(allBlogs).send();
        } catch (error) {
            Response(res).status(401).error("Something Went Wrong").send();
        }
    }

    getParticularBlog=async (req, res) => {
        try {
            const blog=await blogsService.findById(req.params.id);
            if (blog) {
                Response(res).message("Blog Found").body(blog).send();
            } else {
                Response(res).status(401).error("No blog found with this Id").send();
            }
        } catch (error) {
            Response(res).status(401).error("Something Went Wrong").send();
        }
    }

    createBlog=async (req, res) => {
        try {
            const imagesFiles=req.files.filter((image) => image.fieldname==='images[]');
            const vidFiles=req.files.filter((vid) => vid.fieldname==='videos[]');
            const uploadedImages=await uploadOnCloudinary(imagesFiles);
            const uploadedVideos=await uploadVideosOnCloudinary(vidFiles);
            const newBlog=await blogsService.create({ ...req.body, image: uploadedImages, video: uploadedVideos })
            Response(res).body(newBlog).message("Blog Created Successfully").send();
            // Response(res).message("Blog Created Successfully").send();
        } catch (error) {
            console.log(error);
            Response(res).status(401).error("Something Went Wrong").send();
        }

    }




}

module.exports.blogsController=new blogsController();
