import * as userController from '../controllers/userControllers.js';
import express from "express";

const userRoute = express.Router();

userRoute.post('/new', userController.createAccount);
userRoute.post('/login', userController.login);

export default userRoute;