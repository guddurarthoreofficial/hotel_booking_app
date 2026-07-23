const express = require("express");

const {
  createRoom,
  getRooms,
  deleteRoom,
  updateRoom,
  getRoomById,
  uploadRoomImages,
  deleteRoomImage,
} = require("../controllers/roomController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.get("/", getRooms);


// Future

// router.get("/search", searchRooms);
// router.get("/available", getAvailableRooms);
// router.get("/filter", filterRooms);

// router.get("/:id", getRoomById);

router.get("/:id", getRoomById);

router.post(
  "/",
  protect,
  authorize("admin"),
  createRoom
);




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

router.post(
  "/:id/images",
  protect,
  authorize("admin", "manager"),
  upload.array("images", 10),
  uploadRoomImages
);

router.delete(
  "/:roomId/images",
  protect,
  authorize("admin", "manager"),
  deleteRoomImage
);

module.exports = router;