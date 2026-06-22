const express = require("express");

const {
  createBooking,
  getMyBookings,
  cancelBooking,
  getBookingById,
  checkInBooking,
  checkOutBooking,
  markBookingAsPaid,
} = require("../controllers/bookingController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/my", protect, getMyBookings);
router.put("/:id/cancel", protect, cancelBooking);
router.get("/:id", protect, getBookingById);
router.put("/:id/checkin", protect, authorize("admin", "manager","receptionist"), checkInBooking);
router.put("/:id/checkout", protect, authorize("admin", "manager", "receptionist"), checkOutBooking);

router.put("/:id/mark-paid", protect, authorize("admin", "manager", "receptionist"), markBookingAsPaid );


module.exports = router;