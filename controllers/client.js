require("pretty-error").start();
const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// * @route GET /api/clients
// @desc    Get All client
// @access  Public
exports.getClient = asyncHandler(async (req, res, next) => {
  const client = await prisma.client.findMany({
    include: {
      item: true,
    },
  });
  res.status(200).son({ success: true, data: client });
});

// * @route POST /api/clients
// @desc    Create client
// @access  Public
exports.createClient = asyncHandler(async (req, res, next) => {
  const client = await prisma.client.create({
    data: req.body,
  });
  res.status(201).json({ success: true, data: client });
});
