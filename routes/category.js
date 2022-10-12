require("pretty-error").start();
const express = require("express");
const router = express.Router();
const itemController = require("../controllers/item");

router.get("/api/v1/items", itemController.getItems);
router.post("/api/v1/items", itemController.createItem);

module.exports = router;
