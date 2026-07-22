const Booking = require("../models/Booking");
const Room = require("../models/Room");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");
const logActivity = require("../utils/logActivity");

const createBooking = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate, totalGuests, paymentMethod } =
      req.body;

    // Check room exists
    const roomExists = await Room.findById(room);

    if (!roomExists) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    // Check overlapping bookings
    const existingBooking = await Booking.findOne({
      room,
      status: {
        $in: ["pending", "confirmed", "checked_in"],
      },
      checkInDate: {
        $lt: new Date(checkOutDate),
      },
      checkOutDate: {
        $gt: new Date(checkInDate),
      },
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: "Room already booked for selected dates",
      });
    }

    const nights =
      (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24);

    const totalAmount = nights * roomExists.pricePerNight;

    if (nights <= 0) {
      return res.status(400).json({
        success: false,
        message: "Check-out date must be after check-in date",
      });
    }

    const booking = await Booking.create({
      guest: req.user._id,
      room,
      checkInDate,
      checkOutDate,
      totalGuests,
      totalAmount,

      paymentMethod: paymentMethod || "cash",
      paymentStatus: "pending",
    });

    await sendEmail(
      req.user.email,
      "Booking Confirmation",
      `
    <h2>Booking Confirmed</h2>

    <p>Your booking has been created successfully.</p>

    <p><strong>Booking ID:</strong> ${booking._id}</p>

    <p><strong>Total Amount:</strong> ₹${booking.totalAmount}</p>

    <p>Thank you for choosing our hotel.</p>
  `,
    );

    await logActivity({
      action: "Booking",
      description: `${req.user.name} booked Room ${roomExists.roomNumber}`,
      user: req.user._id,
      icon: "booking",
    });

    res.status(201).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      guest: req.user._id,
    })
      .populate("room")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    if (booking.guest.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    if (booking.status === "cancelled") {
      return res.status(400).json({
        success: false,
        message: "Booking is already cancelled",
      });
    }

    if (booking.status === "checked_out") {
      return res.status(400).json({
        success: false,
        message: "Completed booking cannot be cancelled",
      });
    }

    booking.status = "cancelled";

    await booking.save();

    const user = await User.findById(booking.guest);

    await sendEmail(
      user.email,
      "Booking Cancelled",
      `
    <h2>Booking Cancelled</h2>

    <p>Your booking has been cancelled successfully.</p>

    <p>Booking ID: ${booking._id}</p>
  `,
    );

    res.status(200).json({
      success: true,
      message: "Booking cancelled",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("guest", "name email phone")
      .populate("room");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const checkInBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("guest", "name")
      .populate("room", "roomNumber");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    booking.status = "checked_in";
    await booking.save();

    const room = await Room.findById(booking.room._id);

    if (room) {
      room.status = "occupied";
      await room.save();
    }

    await logActivity({
      action: "Check In",
      description: `${booking.guest.name} checked into Room ${booking.room.roomNumber}`,
      user: req.user._id,
      icon: "checkin",
    });

    res.status(200).json({
      success: true,
      message: "Guest checked in successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const checkOutBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("guest", "name")
      .populate("room", "roomNumber");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    booking.status = "checked_out";
    await booking.save();

    const room = await Room.findById(booking.room._id);

    if (room) {
      room.status = "available";
      await room.save();
    }

    await logActivity({
      action: "Check Out",
      description: `${booking.guest.name} checked out from Room ${booking.room.roomNumber}`,
      user: req.user._id,
      icon: "checkout",
    });

    res.status(200).json({
      success: true,
      message: "Guest checked out successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const markBookingAsPaid = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    booking.paymentStatus = "paid";

    await booking.save();

    const user = await User.findById(booking.guest);

    await sendEmail(
      user.email,
      "Payment Received",
      `
    <h2>Payment Received Successfully</h2>

    <p>We have received your payment.</p>

    <p><strong>Booking ID:</strong> ${booking._id}</p>

    <p><strong>Amount:</strong> ₹${booking.totalAmount}</p>

    <p><strong>Payment Method:</strong> ${booking.paymentMethod}</p>

    <p>Thank you for choosing our hotel.</p>
  `,
    );

    res.status(200).json({
      success: true,
      message: "Payment marked as paid",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getMyBookings,
  cancelBooking,
  getBookingById,
  checkInBooking,
  checkOutBooking,
  markBookingAsPaid,
};
