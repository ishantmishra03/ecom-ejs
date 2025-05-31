import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './config/db.config.js'
connectDB();

import adminRouter from './routes/adminRouter.route.js'
import usersRouter from './routes/usersRouter.route.js'
import productsRouter from './routes/productsRouter.route.js'
import mainRouter from './routes/index.route.js'

import cookieparser from 'cookie-parser';
import flash from 'connect-flash';
import expressSession from 'express-session';

import path from 'path';
import { fileURLToPath } from 'url';

//To get current Directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(expressSession({
    resave: false,
    saveUninitialized: true,
    secret: process.env.EXPRESS_SESSION_SECRET,
}))
app.use(flash());

//Routers
app.use('/admin', adminRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/', mainRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

