require("pretty-error").start();
const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// * @route GET /api/trips
// @desc    Get All trips
// @access  Public
exports.getTrips = asyncHandler(async (req, res, next) => {
  const trip = await prisma.trip();
  res.status(200).json({ success: true, data: trip });
});

// * @route POST /api/trips
// @desc    Create trips
// @access  Public
exports.createTrip = asyncHandler(async (req, res, next) => {
  const trip = await prisma.trip.create({
    data: req.body,
  });
  res.status(201).json({ success: true, data: trip });
});
