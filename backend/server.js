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

// CORS Configuration
const allowedOrigins = [
  'https://nepliz.vercel.app',
  'http://localhost:3000', // For local development
  'http://localhost:5173', // Vite dev server
  // Add other domains if needed
]

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true)
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.'
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}))

// OR simpler version if you want to allow all in development:
// app.use(cors({
//   origin: process.env.NODE_ENV === 'production' 
//     ? 'https://nepliz.vercel.app' 
//     : ['http://localhost:3000', 'http://localhost:5173'],
//   credentials: true
// }))

// Handle preflight requests
app.options('*', cors())

// Middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Initialize connections
const initializeConnections = async () => {
  try {
    await connectDB()
    await connectCloudinary()
    console.log('All connections established')
  } catch (error) {
    console.error('Connection error:', error)
    process.exit(1)
  }
}

// Routes
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// Health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'API is working',
    timestamp: new Date().toISOString(),
    cors: 'Configured for: ' + allowedOrigins.join(', ')
  })
})

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  })
})

// Initialize and start
initializeConnections().then(() => {
  if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    const PORT = process.env.PORT || 4000
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
      console.log(`CORS enabled for: ${allowedOrigins.join(', ')}`)
    })
  }
})

export default app