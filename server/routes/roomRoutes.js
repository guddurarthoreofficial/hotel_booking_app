const express = require("express");

const {
  createRoom,
  getRooms,
  deleteRoom,
  updateRoom,
  getRoomById,
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


router.get("/:id", getRoomById);

router.put(
  "/:id",
  protect,
  authorize("admin", "manager"),
  updateRoom
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteRoom
);


module.exports = router;