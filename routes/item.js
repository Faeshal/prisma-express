require("pretty-error").start();
const express = require("express");
const router = express.Router();
const itemController = require("../controllers/item");

router.get("/api/items", itemController.getItems);
router.post("/api/items", itemController.createItem);

module.exports = router;
