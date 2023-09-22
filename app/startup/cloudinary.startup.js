
const cloudinary=require('cloudinary').v2;
const fileUpload=require("express-fileupload")



module.exports=(app) => {
    app.use(fileUpload({
        useTempFiles: true
    }))

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECREAT,
        secure: true
    })
    console.log("Cloudinary Setup Ready");
}
