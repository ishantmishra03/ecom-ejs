import express from 'express';
const router = express.Router();
import {isLoggedIn} from '../middlewares/isLoggedIn.js';
import productModel from '../models/product.models.js';
import userModel from "../models/user.models.js";

router.get('/', (req,res) => {
    let error = req.flash("error");
    res.render("index", { error , loggedin: false });
})

router.get('/shop', isLoggedIn,async(req,res) => {
    let products = await productModel.find();
    let success = req.flash('success');
    res.render("shop", { products, success });
})

router.get('/addtocart/:id', isLoggedIn,async(req,res) => {
    let user = await userModel.findOne({email: req.user.email});
    user.cart.push(req.params.id);
    await user.save();
    req.flash("success", 'Added to cart');
    res.redirect("/shop");
})


router.get('/cart', isLoggedIn, async(req,res) => {
     let user = await userModel.findOne({email: req.user.email}).populate("cart");
    res.render("cart", { user });
})

export default router;