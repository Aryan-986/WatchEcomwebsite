import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app = express()

// Basic middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// Health check (important for Vercel)
app.get('/', (req, res) => {
  res.json({ 
    status: 'API is working',
    timestamp: new Date().toISOString()
  })
})

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' })
})

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err)
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'production' ? null : err.message 
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Initialize connections and start server
const startServer = async () => {
  try {
    console.log('Connecting to database...')
    await connectDB()
    console.log('Database connected successfully')
    
    console.log('Connecting to Cloudinary...')
    await connectCloudinary()
    console.log('Cloudinary connected successfully')
    
    // Only listen if not in Vercel serverless environment
    if (process.env.VERCEL !== '1') {
      const PORT = process.env.PORT || 4000
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
      })
    }
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

// Start the server
startServer()

// Export for Vercel serverless
export default app