require("pretty-error").start();
const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");
const clientRoutes = require("./routes/client");
const itemRoutes = require("./routes/item");
const tripRoutes = require("./routes/trip");
// const Rollbar = require("rollbar");
// const rollbar = new Rollbar({
//   accessToken: "7a97ecbd2e72473ba10242f2de8849b8",
//   captureUncaught: true,
//   captureUnhandledRejections: true,
// });

// const Honeybadger = require("@honeybadger-io/js");
// Honeybadger.configure({
//   apiKey: "c95c2812",
// });

// * Main & Log
// app.use(Honeybadger.requestHandler);
app.use(morgan("dev"));
app.use(express.json());

// * Routes
app.get("/", (req, res, next) => {
  res.status(200).json({ success: true, message: "Express Up & Running" });
});
app.use(clientRoutes);
app.use(itemRoutes);
app.use(tripRoutes);

// * Rollbar
// app.use(rollbar.errorHandler());

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Running on port" + PORT);
  }
});
