// require("pretty-error").start();
// const asyncHandler = require("express-async-handler");
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// // * @route GET /api/users
// // @desc    Get All Candidat
// // @access  Public
// exports.getUser = asyncHandler(async (req, res, next) => {
//   const user = await prisma.user.findMany({
//     include: {
//       address: true,
//     },
//   });
//   res.status(200).json({ success: true, data: user });
// });

// // * @route POST /api/users
// // @desc    Create users
// // @access  Public
// exports.createUser = asyncHandler(async (req, res, next) => {
//   const user = await prisma.user.create({
//     data: req.body,
//   });
//   res.status(201).json({ success: true, data: user });
// });

// // * @route PUT /api/users
// // @desc   Edit user
// // @access  Public
// exports.editUser = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;
//   const { name, email, status } = req.body;
//   const user = await prisma.user.update({
//     where: { id: parseInt(id) },
//     data: { name, email, status },
//   });
//   res.status(200).json({ success: true, data: user });
// });

// // * @route DELETE /api/users
// // @desc   Delete user
// // @access  Public
// exports.deleteUser = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;
//   const userData = await prisma.user.delete({ where: { id: parseInt(id) } });
//   res.status(200).json({ success: true, data: userData });
// });
