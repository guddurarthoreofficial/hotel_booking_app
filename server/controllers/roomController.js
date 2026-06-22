const Room = require("../models/Room");

const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);

    res.status(201).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getRooms = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const query = {};

    if (req.query.roomType) {
      query.roomType = req.query.roomType;
    }

    if (req.query.status) {
      query.status = req.query.status;
    }

    if (req.query.search) {
      query.roomNumber = {
        $regex: req.query.search,
        $options: "i",
      };
    }

    const totalRooms = await Room.countDocuments(query);

    const rooms = await Room.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      page,
      totalPages: Math.ceil(totalRooms / limit),
      totalRooms,
      rooms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createRoom,
  getRooms,
};