import express from "express"
import { admin, loginUser, signupUser } from "../controller/userController.js"

const userRouter = express.Router()

userRouter.post("/login", loginUser )
userRouter.post("/signup", signupUser )
userRouter.post("/admin", admin)


export default userRouter