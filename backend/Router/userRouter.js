import express from "express";
import { fetchUsers, login, register } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/fetchuser", isAuthenticated, fetchUsers);

export default userRouter;
