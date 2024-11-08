// app.js

const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mySqlPool = require("./config/db");

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/students", require("./routes/studentRoutes"));

// Test route
app.get("/test", (req, res) => {
  res.status(200).send("<h1>Node MySql App</h1>");
});

// Start server after confirming DB connection
const PORT = process.env.PORT || 3000;

mySqlPool.query("SELECT 1").then(() => {
  console.log("MySql DB Connected".bgCyan.white);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgMagenta.white);
  });
});
