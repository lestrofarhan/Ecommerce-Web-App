import userModel from "../models/userModel.js"
import   validator   from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



const createToken =  (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser = async (req,res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({
            email,
        })
        if (!user) {
            return res.json({
                message: "invalid Credentials",
                status: false
            })
        }
        
        const comparePass = await bcrypt.compare(password, user.password)

        if (comparePass) {
            const token = createToken(user._id)

            res.json({
                message: "Login successful",
                token: token,
                status: true
            })
        }
        else{
            return res.json({
                message: "invalid Credentials",
                status: false
            })
        }

        

    } catch (error) {
        res.json({
            message: "Error"+ error,
            status: false
        })
    }
    
}
const signupUser = async (req,res) => {
    
    try {
        const { email, password, name } = req.body
        
        const exist = await userModel.findOne({ email: email })

        if (exist) {
            return res.json({
                message: "email already exist",
                status: false
            })
        }
        if (!validator.isEmail(email)) {
            return res.json({
                message: "please enter a valid email",
                status: false
            })
        }
        if (password.length < 8) {
            return res.json({
                message: "password must be 8 char long",
                status: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,

        })

        const user = await newUser.save()
        
        const token =  createToken(user._id)
        res.json({
            message: "signUp successful",
            token : token
        })

    } catch (err) {
        res.json({
            message: `Error : ${err}`,
            status: false
        })
    }
    

    
}
const admin = async (req,res) => {
    
}

export { loginUser, signupUser, admin}