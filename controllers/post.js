require("pretty-error").start();
const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const log4js = require("log4js");
const log = log4js.getLogger("trip");
log.level = "info";

// * @route GET /api/trips
// @desc    Get All trips
// @access  Public
exports.getTrips = asyncHandler(async (req, res, next) => {
  const trip = await prisma.trip.findMany({
    include: {
      item: {
        include: {
          client: true,
        },
      },
      client: true,
    },
  });

  res.status(200).json({ success: true, data: trip });
});

// * @route POST /api/trips
// @desc    Create trips
// @access  Public
exports.createTrip = asyncHandler(async (req, res, next) => {
  const { driver, clients, items } = req.body;
  console.log("BODY:", req.body);

  let clientArr = [];
  for (client of clients) {
    let obj = {
      clientId: parseInt(client),
    };
    clientArr.push(obj);
  }

  const trip = await prisma.trip.create({
    data: {
      driver: driver,
      client: {
        create: clientArr,
      },
    },
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

// * @route POST /api/trips/removeitems/:id
// @desc    Create trips
// @access  Public
exports.removeItemsFromTrip = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const item = await prisma.item.update({
    data: { tripId: null },
    where: { id: parseInt(id) },
  });
  console.log("item:", item);

  res
    .status(201)
    .json({ success: true, data: "Success remove item from trips" });
});

// * @route POST /api/trips/removeclients/:id
// @desc    Delete Client from trips
// @access  Public
exports.removeClientFromTrip = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const tripId = await prisma.tripClient.findUnique({});

  const trip = await prisma.tripClient.delete({
    where: { clientId_tripId: { clientId: 3, tripId: id } },
  });

  console.log(trip);

  res
    .status(201)
    .json({ success: true, data: "Success remove client from trips" });
});
