import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const storage = new GridFsStorage({
    url: process.env.MONGO_URL,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/*"];
        // You should use process.env.MONGO_URL instead of undefined 'url'.
        
        if (match.indexOf(file.mimetype) === -1) {
            // If the file's MIME type doesn't match "image/*", return a custom filename.
            return `${Date.now()}-blog-${file.originalname}`;
        } else {
            // If the file is an image, return an object with the bucketName and a generated filename.
            return {
                bucketName: "photos",
                filename: `${Date.now()}-blog-${file.originalname}`
            };
        }
    }
});

// Export the multer middleware function
export const uploadMiddleware = multer({ storage }); 
