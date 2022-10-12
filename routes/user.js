require("pretty-error").start();
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/api/v1/users", userController.getUsers);
router.post("/api/v1/users", userController.createUser);
router.get("/api/v1/users/:id", userController.getUser);
router.put("/api/v1/users/:id", userController.updateUser);
router.delete("/api/v1/users/:id", userController.deleteUser);

module.exports = router;
