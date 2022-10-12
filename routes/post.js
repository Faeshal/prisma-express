require("pretty-error").start();
const express = require("express");
const router = express.Router();
const tripController = require("../controllers/trip");

router.get("/api/v1/trips", tripController.getTrips);

router.post("/api/v1/trips", tripController.createTrip);

router.delete(
  "/api/v1/trips/removeitems/:id",
  tripController.removeItemsFromTrip
);

router.delete(
  "/api/v1/trips/removeclients/:id",
  tripController.removeClientFromTrip
);

module.exports = router;
