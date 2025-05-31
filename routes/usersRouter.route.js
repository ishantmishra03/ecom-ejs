import express from 'express';
import {isLoggedIn} from '../middlewares/isLoggedIn.js'
const router = express.Router();

import { registerUser, loginUser,logout } from "../controllers/authController.controller.js"

router.get('/', (req, res) => {
    res.send("Hey user");
})

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', isLoggedIn, logout)

export default router;