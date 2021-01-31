require("pretty-error").start();
const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");
const clientRoutes = require("./routes/client");
const itemRoutes = require("./routes/item");
const tripRoutes = require("./routes/trip");

// * Main & Log
app.use(morgan("dev"));
app.use(express.json());

// * Routes
app.get("/", (req, res, next) => {
  res.status(200).json({ success: true, message: "Express Up & Running" });
});
app.use(clientRoutes);
app.use(itemRoutes);
app.use(tripRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Server is Running on Port: " + PORT);
  }
});
