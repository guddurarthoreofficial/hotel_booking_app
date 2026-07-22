const User = require("../models/User");
const Room = require("../models/Room");
const Booking = require("../models/Booking");

const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalRooms = await Room.countDocuments();

    const totalBookings = await Booking.countDocuments();

    const occupiedRooms = await Room.countDocuments({
      status: "occupied",
    });

    const availableRooms = await Room.countDocuments({
      status: "available",
    });

    const maintenanceRooms = await Room.countDocuments({
      status: "maintenance",
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
      revenueData.length > 0 ? revenueData[0].totalRevenue : 0;

    const recentBookings = await Booking.find()
      .populate("guest", "name email")
      .populate("room", "roomNumber roomType")
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalRooms,
        totalBookings,
        availableRooms,
        occupiedRooms,
        maintenanceRooms,
        totalRevenue,
      },
      recentBookings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getRevenueAnalytics = async (req, res) => {
  try {
    const period = req.query.period || "1y";

    let groupFormat;
    let startDate = new Date();

    switch (period) {
      case "1w":
        startDate.setDate(startDate.getDate() - 6);
        startDate.setHours(0, 0, 0, 0);
        groupFormat = "%Y-%m-%d";
        break;

      case "1m":
        startDate.setMonth(startDate.getMonth() - 1);
        startDate.setHours(0, 0, 0, 0);
        groupFormat = "%Y-%m-%d";
        break;

      case "5y":
        startDate.setFullYear(startDate.getFullYear() - 4);
        startDate.setMonth(0, 1);
        startDate.setHours(0, 0, 0, 0);
        groupFormat = "%Y";
        break;

      case "1y":
      default:
        startDate.setFullYear(startDate.getFullYear() - 1);
        startDate.setHours(0, 0, 0, 0);
        groupFormat = "%Y-%m";
        break;
    }

    const revenue = await Booking.aggregate([
      {
        $match: {
          status: {
            $in: ["checked_in", "checked_out"],
          },
          createdAt: {
            $gte: startDate,
          },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: groupFormat,
              date: "$createdAt",
            },
          },
          amount: {
            $sum: "$totalAmount",
          },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      revenue,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  getDashboardStats,
  getRevenueAnalytics,
};
