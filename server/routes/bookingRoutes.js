const express = require("express");

const {
  createBooking,
  getMyBookings,
  cancelBooking,
  getBookingById,
  checkInBooking,
  checkOutBooking,
} = require("../controllers/bookingController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/my", protect, getMyBookings);
router.put("/:id/cancel", protect, cancelBooking);
router.get("/:id", protect, getBookingById);
router.put("/:id/checkin", protect, authorize("admin", "manager","receptionist"), checkInBooking);
router.put("/:id/checkout", protect, authorize("admin", "manager", "receptionist"), checkOutBooking);


module.exports = router;