import express from 'express';
import auth from '../middlewares/auth.js';
import { userInfo } from '../controllers/info.controller.js';

const router = express.Router();

router.get('/profile', auth, userInfo);

export default router;