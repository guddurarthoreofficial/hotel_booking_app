const express = require("express");

const {
  createBooking,
  getMyBookings,
  cancelBooking,
  getBookingById,
  checkInBooking,
} = require("../controllers/bookingController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/my", protect, getMyBookings);
router.put("/:id/cancel",protect, cancelBooking);
router.get("/:id", protect, getBookingById);
router.put("/:id/checkin",protect,authorize("admin", "manager","receptionist"), checkInBooking);


module.exports = router;