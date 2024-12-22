const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 2003;

// Define the route
app.get("/api/contacts", (req, res) => {
  res.status(200).json({ message: "Your new API" });
});

// Start the server and assign it to the `server` variable
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

// Handle graceful shutdown
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server gracefully shut down.");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server gracefully shut down.");
    process.exit(0);
  });
});
