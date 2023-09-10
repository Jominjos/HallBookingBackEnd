const express = require("express");
const Hall = require("../models/hall");
const hallController = require("../controllers/hallController");
const router = express.Router();

router.get("/", hallController.get);
router.post("/", hallController.post);

module.exports = router;
