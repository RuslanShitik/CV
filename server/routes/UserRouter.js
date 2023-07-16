import {Router} from "express";
import UserController from "../controllers/UserController.js";
import userController from "../controllers/UserController.js";
import checkAuth from "../utils/checkAuth.js";

const userRouter = new Router();

userRouter.post('/auth/register', UserController.create)
userRouter.post('/auth/login', UserController.login)
userRouter.get('/users', checkAuth, userController.getAll)

export default userRouter