import express from "express";

import { getUser, loginUser, logoutUser, singupUser } from "../controller/user.controller.js";

const router = express.Router();

// User Routes
router.get('/user', getUser);
router.post('/user/signup', singupUser);
router.post('/user/login', loginUser);
router.put('/user/logout', logoutUser);

export default router;