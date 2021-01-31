require("pretty-error").start();
const express = require("express");
const router = express.Router();
const tripController = require("../controllers/trip");

router.get("/api/trips", tripController.getTrips);
router.post("/api/trips", tripController.createTrip);

module.exports = router;
