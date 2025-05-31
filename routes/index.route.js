import express from 'express';
const router = express.Router();
import {isLoggedIn} from '../middlewares/isLoggedIn.js';
import productModel from '../models/product.models.js'

router.get('/', (req,res) => {
    let error = req.flash("error");
    res.render("index", { error });
})

router.get('/shop', isLoggedIn,async(req,res) => {
    let products = await productModel.find();
    res.render("shop", { products });
})

export default router;