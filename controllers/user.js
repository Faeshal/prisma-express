require("pretty-error").start();
const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { faker } = require("@faker-js/faker");
const { paginate } = require("../utils/paginate");
const { ErrorResponse } = require("../utils/errorHandler");
const log4js = require("log4js");
const log = log4js.getLogger("user");
log.level = "info";

// * @route GET /api/v1/users
// @desc    Get All users
// @access  Public
exports.getUsers = asyncHandler(async (req, res, next) => {
  const { search, limit, page } = req.query;

  const length = await prisma.user.count();
  const data = await prisma.user.findMany({
    skip: req.skip,
    take: limit,
    orderBy: { id: "desc" },
  });

  // * offset pagination
  const result = await paginate({ length, limit, page, req });

  res.status(200).json({
    success: true,
    totalData: length,
    totalPage: result.totalPage,
    currentPage: result.currentPage,
    nextPage: result.nextPage,
    data: data || [],
  });
});

// * @route POST /api/v1/users
// @desc    Create users
// @access  Public
exports.createUser = asyncHandler(async (req, res, next) => {
  // * generate random data
  const email = faker.internet.email();
  const name = faker.name.fullName();
  const bio = faker.lorem.sentence();

  // * nested write (with transactional guaranteed)
  const data = await prisma.user.create({
    data: {
      email,
      name,
      profile: {
        create: {
          bio,
        },
      },
    },
  });
  res.status(201).json({ success: true, data });
});

// * @route GET /api/v1/users/:id
// @desc    Get All users by id
// @access  Public
exports.getUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const data = await prisma.user.findUnique({
    where: { id: parseInt(id) },
    include: { profile: true },
  });
  res.status(200).json({ success: true, data });
});

// * @route PUT /api/v1/users/:id
// @desc    update users
// @access  Public
exports.updateUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const data = await prisma.user.update({
    where: { id: parseInt(id) },
    data: req.body,
  });
  res.status(200).json({ success: true, data });
});

// * @route DELETE /api/v1/users/:id
// @desc    delete user
// @access  Public
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const isValid = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  if (isValid == null) {
    return next(new ErrorResponse("invalid id", 400));
  }

  const data = await prisma.user.delete({
    where: { id: parseInt(id) },
  });
  res.status(200).json({ success: true, data });
});
