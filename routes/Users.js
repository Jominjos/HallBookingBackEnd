const express = require("express");

const router = express.Router();
const controller = require("../controllers/UserController");
const UserController = require("../controllers/UserController");

router.get("/", UserController.get);
router.post("/", UserController.post);

module.exports = router;
