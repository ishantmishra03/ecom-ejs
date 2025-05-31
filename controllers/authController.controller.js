import bcrypt from 'bcrypt';
import userModel from "../models/user.models.js"
import { generateToken } from "../utils/generateToken.js"

//Register User
export const registerUser = async (req, res) => {
    const { fullname, email, password } = req.body;

    try {
        // Check if user already exists 
        const user = await userModel.findOne({ email });
        if (user) {
            req.flash("errro", "You already have an account, please login.")
            return res.redirect("/");
        }

        //Encrypt password and create user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const createdUser = await userModel.create({
            fullname,
            email,
            password: hashedPassword,
        })

        //Set JWT token
        let token = generateToken(createdUser);
        res.cookie("token", token);

        res.redirect("/shop");
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
}

//Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Check if user already exists
    let user = await userModel.findOne({ email });
    if (!user) {
        req.flash("error", "Email or Password incorrect");
        return res.redirect("/");
    }

    //Check if password is matched
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        req.flash("error", "Email or Password incorrect");
        return res.redirect("/");
    } else {
        //Set JWT token
        let token = generateToken(user);
        res.cookie("token", token);
        res.redirect("/shop");
    }
}

//Logout User 
export const logout = (req,res) => {
    res.clearCookie("token");
    res.redirect("/");
}