import express from 'express';
const router = express.Router();
import { upload } from '../config/multer.config.js';
import productModel from '../models/product.models.js'

router.post('/create', upload.single("image"), async (req, res) => {
    let { name, price, discount, bgColor, panelColor, textColor } = req.body;
    try {
        let product = await productModel.create({
            image: req.file.buffer,
            name,
            price,
            discount,
            bgColor,
            panelColor,
            textColor,
        });

        req.flash("success", "Product created successfully");
        res.redirect("/admin/admin")
    } catch (error) {
        res.redirect("/admin/admin")
    }
})

export default router;