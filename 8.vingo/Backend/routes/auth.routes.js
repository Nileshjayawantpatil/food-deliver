import express from "express";
import { signIn, signOut, signup } from "../controllers/auth.controller.js";

const authRouter =  express.Router()

authRouter.post("/signup",signup)
authRouter.post("/signIn",signIn)
authRouter.get("/signout",signOut)

export default authRouter;
