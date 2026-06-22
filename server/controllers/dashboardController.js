const User = require("../models/User");
const Room = require("../models/Room");
const Booking = require("../models/Booking");

const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalRooms = await Room.countDocuments();

    const totalBookings = await Booking.countDocuments();

    const occupiedRooms = await Booking.countDocuments({
      status: "checked_in",
    });

    const revenueData = await Booking.aggregate([
      {
        $match: {
          status: {
            $in: ["checked_in", "checked_out"],
          },
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$totalAmount",
          },
        },
      },
    ]);

    const totalRevenue =
      revenueData.length > 0
        ? revenueData[0].totalRevenue
        : 0;

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalRooms,
        totalBookings,
        occupiedRooms,
        totalRevenue,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};