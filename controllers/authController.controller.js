import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from "../models/user.models.js"
import { generateToken } from "../utils/generateToken.js"


export const registerUser = async (req, res) => {
    const { fullname, email, password } = req.body;

    try {
        // Check if user already exists 
        const user = await userModel.findOne({ email });
        if (user) {
            return res.send('User already exists');
        }

        //Encrypt password and create user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const createdUser = await userModel.create({
            fullname,
            email,
            password: hashedPassword,
        })

        let token = generateToken(createdUser);
        res.cookie("token", token);

        res.send(createdUser);
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
}