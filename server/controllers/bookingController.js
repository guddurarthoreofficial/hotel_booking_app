const Booking = require("../models/Booking");
const Room = require("../models/Room");

const createBooking = async (req, res) => {
  try {
    const {
      room,
      checkInDate,
      checkOutDate,
      totalGuests,
    } = req.body;

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
        $in: [
          "pending",
          "confirmed",
          "checked_in",
        ],
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
        message:
          "Room already booked for selected dates",
      });
    }

    const nights =
      (new Date(checkOutDate) -
        new Date(checkInDate)) /
      (1000 * 60 * 60 * 24);

    const totalAmount =
      nights * roomExists.pricePerNight;

    const booking = await Booking.create({
      guest: req.user._id,
      room,
      checkInDate,
      checkOutDate,
      totalGuests,
      totalAmount,
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
    const booking = await Booking.findById(
      req.params.id
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    if (
      booking.guest.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    booking.status = "cancelled";

    await booking.save();

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

module.exports = {
  createBooking,
  getMyBookings,
  cancelBooking,
};