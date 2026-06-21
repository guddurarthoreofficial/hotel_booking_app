const express = require("express");

const {
  createRoom,
  getRooms,
} = require("../controllers/roomController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", getRooms);

router.post(
  "/",
  protect,
  authorize("admin"),
  createRoom
);

module.exports = router;