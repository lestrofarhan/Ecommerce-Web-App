import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoutes.js"
import productRouter from "./routes/productRoutes.js"


// app
const app = express()
const port = process.env.PORT || 9000


// middle wares
connectDB()
connectCloudinary()
app.use(express.json())
app.use(cors())


// API endpoint
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)


app.get("/", (req, res) => {
    res.send("server is geooo")
})
app.get("/usw", (req, res) => {
    res.send("server is running")
})

app.listen(port, () => console.log("server is running on " + port))
