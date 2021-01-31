require("pretty-error").start();
const express = require("express");
const router = express.Router();
const clientController = require("../controllers/client");

router.get("/api/clients", clientController.getClient);
router.post("/api/clients", clientController.createClient);

module.exports = router;
