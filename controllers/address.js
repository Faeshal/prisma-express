// require("pretty-error").start();
// const asyncHandler = require("express-async-handler");
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// // * @route GET /api/address
// // @desc    Get All Candidat
// // @access  Public
// exports.getAddress = asyncHandler(async (req, res, next) => {
//   const address = await prisma.address.findMany();
//   res.status(200).json({ success: true, data: address });
// });

// // * @route POST /api/address
// // @desc    Create adress
// // @access  Public
// exports.createAddress = asyncHandler(async (req, res, next) => {
//   const { city, postCode, userId } = req.body;
//   const address = await prisma.address.create({
//     data: { city, postCode, userId },
//   });
//   res.status(201).json({ success: true, data: address });
// });
