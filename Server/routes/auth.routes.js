import express from 'express';
import { registerUser, loginUser, googleSignIn } from '../controllers/user.controller.js';
import auth from '../middlewares/auth.js';
import { loginLimiter } from '../middlewares/loginLimiter.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login',loginLimiter, loginUser);
router.post('/google', googleSignIn);

router.get('/profile', auth, (req, res) => {
    res.status(200).json({ message: 'This is your profile data', userId: req.userId });
});


export default router;
