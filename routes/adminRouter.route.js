import express from 'express';
const router = express.Router();
import adminModel from "../models/admin.models.js"

if (process.env.NODE_ENV === "development") {
    router.post('/create', async (req, res) => {
        let admins = await adminModel.find();
        if(admins.length > 0){
            return res.status(503).send("You don't have permission to create admin");
        }

        let { fullname, email, password } = req.body;

        let admin = await adminModel.create({
            fullname,
            email,
            password
        })

        res.status(201).send(admin);
    })
}



export default router;