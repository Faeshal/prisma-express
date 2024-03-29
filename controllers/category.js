require("pretty-error").start();
const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const log4js = require("log4js");
const log = log4js.getLogger("item");
log.level = "info";

// * @route GET /api/items
// @desc    Get All items
// @access  Public
exports.getItems = asyncHandler(async (req, res, next) => {
  const item = await prisma.item.findMany({
    include: {
      trip: true,
    },
  });
  res.status(200).json({ success: true, data: item });
});

// * @route POST /api/items
// @desc    Create items
// @access  Public
exports.createItem = asyncHandler(async (req, res, next) => {
  const item = await prisma.item.create({
    data: req.body,
  });
  res.status(201).json({ success: true, data: item });
});
