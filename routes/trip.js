require("pretty-error").start();
const express = require("express");
const router = express.Router();
const tripController = require("../controllers/trip");

router.get("/api/trips", tripController.getTrips);
router.post("/api/trips", tripController.createTrip);

router.delete("/api/trips/removeitems/:id", tripController.removeItemsFromTrip);
router.delete(
  "/api/trips/removeclients/:id",
  tripController.removeClientFromTrip
);

module.exports = router;
