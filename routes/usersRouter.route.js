import express from 'express';
const router = express.Router();

import { registerUser } from "../controllers/authController.controller.js"

router.get('/', (req, res) => {
    res.send("Hey user");
})

router.post('/register', registerUser);

export default router;