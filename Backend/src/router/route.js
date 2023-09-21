import express from "express";

import { getUser, loginUser, logoutUser, singupUser } from "../controller/user.controller.js";
import { uploadMiddleware } from "../utils/upload.js";
import { getImage, uploadImage } from "../controller/image.controller.js";
import { createPost } from "../controller/post.controller.js";
import { authenticateToken } from "../controller/jwt.controller.js";

const router = express.Router();

// User Routes
router.get('/user', getUser);
router.post('/user/signup', singupUser);
router.post('/user/login', loginUser);
router.put('/user/logout', logoutUser);

// Image Routes
router.post('/file/upload', uploadMiddleware.single('file'), uploadImage);
router.get('/file/:filename', getImage);

// Post Routes
router.post('/create', authenticateToken, createPost);

export default router;