import express from "express";

const router = express.Router();

// Example API route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API folder endpoint!" });
});

// Another example
router.get("/hello", (req, res) => {
  res.json({ message: "Hello from /api/hello" });
});

export default router;
