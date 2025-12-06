import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express()
// The port variable is no longer necessary for Vercel, but harmless to keep
const port = process.env.PORT || 4000 
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

// Base route test
app.get('/',(req,res)=>{
    res.send("API Working")
})

// VERCEL FIX: 
// 1. We MUST remove the app.listen() block because Vercel handles the server startup.
// app.listen(port, ()=> console.log('Server started on PORT : '+ port))

// 2. We MUST export the Express app instance so Vercel can run it as a Serverless Function.
export default app;