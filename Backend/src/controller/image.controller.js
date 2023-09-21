import mongoose from "mongoose";
import grid from 'gridfs-stream';
import dotenv from 'dotenv';
import Images from "../models/image.model.js";

dotenv.config();

const port = process.env.PORT || 5000;
const url = `http://localhost:${port}`;

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.on('open', () => {
    try {
        gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
            bucketName: 'fs'
        });
        gfs = grid(conn.db, mongoose.mongo);
        gfs.collection('fs');
        console.log("Gridfs Connection established")
    } catch (error) {
        console.log("Gridfs Connection Error")
    }
});





export const uploadImage = (request, response) => {
    if (!request.file)
        return response.status(400).json("File not found");

    const imageUrl = `${url}/api/file/${request.file.filename}`;

    return response.status(200).json({ image: imageUrl });
}

// export const uploadImage = async (request, response) => {
//     // Check if request.file exists to ensure a file was uploaded
//     if (!request.file) {
//         return response.status(400).json("File is not found");
//     }

//     // Generate an image URL based on your server configuration
//     try {
//         const imageUrl = `${url}/api/file/${request.file.filename}`;
//         await Images.create({ image: imageUrl, name: request.file.filename })
//         return response.status(200).json({ image: imageUrl, file: request.file.filename });
//     } catch (error) {
//         return response.status(404).json({ error: error.message })
//     }
// // Replace 'BASE_URL' with the actual environment variable containing your server's base URL
// };


export const getImage = async (request, response) => {
    try {
        const file = await gfs.files.findOne({ filename: request.params.filename });

        if (!file) {
            return response.status(404).json({ msg: 'File not found' });
        }

        const readStream = gridfsBucket.openDownloadStream(file._id);
        const permissions = file.permissions;

        console.log("permission", permissions);
        // Set the content type based on the file's MIME type if available
        // response.setHeader('Content-Type', file.contentType || 'application/octet-stream');
        response.setHeader('Content-Type', file.contentType || 'image/*');


        // Optionally, set the Content-Disposition header to specify how the file should be displayed
        // For example, to force a download, you can use:
        // response.setHeader('Content-Disposition', `attachment; filename="${file.filename}"`);

        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}
