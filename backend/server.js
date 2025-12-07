import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

// Import your routes
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import apiRouter from "./api/index.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect Database and Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(cors());
app.use(express.json());

// Main Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// API folder routes
app.use("/api", apiRouter);

// Test route
app.get("/", (req, res) => {
  res.send("API Working on Vercel");
});

// Start server locally
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

// Export for Vercel serverless
export default app;