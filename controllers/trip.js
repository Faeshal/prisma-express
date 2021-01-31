require("pretty-error").start();
const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// * @route GET /api/trips
// @desc    Get All trips
// @access  Public
exports.getTrips = asyncHandler(async (req, res, next) => {
  const trip = await prisma.trip.findMany();
  res.status(200).json({ success: true, data: trip });
});

// * @route POST /api/trips
// @desc    Create trips
// @access  Public
exports.createTrip = asyncHandler(async (req, res, next) => {
  const { driver, clients, items } = req.body;
  console.log("BODY:", req.body);
  const trip = await prisma.trip.create({
    data: { driver: driver },
  });

  await prisma.TripClient.create({
    data: { clientId: 1, tripId: trip.id },
  });

  // * Update Item
  for (item of items) {
    await prisma.item.update({
      data: { tripId: trip.id },
      where: { id: parseInt(item) },
    });
  }

  res.status(201).json({ success: true, data: "Success Create Trip" });
});
