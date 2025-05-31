import express from 'express';
const router = express.Router();
import {isLoggedIn} from '../middlewares/isLoggedIn.js'

router.get('/', (req,res) => {
    let error = req.flash("error");
    res.render("index", { error });
})

router.get('/shop', isLoggedIn,(req,res) => {
    res.render("shop");
})

export default router;