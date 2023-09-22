const cloudinary=require('cloudinary').v2; //only for cloudinary 
const fs=require('fs');
const { promisify }=require('util');
const writeFileAsync=promisify(fs.writeFile);


module.exports.uploadOnCloudinary=async function (files) {

    try {
        const imageBuffers=files.map((ele) => {
            return ele.buffer
        }) // Array of image buffers



        const uploadedImages=[];

        for (const imageData of imageBuffers) {
            const tempFilePath=`./temp_image_${Date.now()}.png`;

            // Write the buffer to a temporary file
            await writeFileAsync(tempFilePath, imageData);

            const uploadResult=await cloudinary.uploader.upload(tempFilePath, {
                resource_type: 'image',
                public_id: '' // 
            });

            uploadedImages.push(uploadResult.secure_url);
            fs.unlinkSync(tempFilePath);
        }

        return uploadedImages
    } catch (error) {
        console.error('Upload error:', error);
        return error
    }
}