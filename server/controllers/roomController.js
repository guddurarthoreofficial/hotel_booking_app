const Room = require("../models/Room");
const cloudinary = require("../config/cloudinary");
const logActivity = require("../utils/logActivity");

const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);

    await logActivity({
      action: "Room",
      description: `Room ${room.roomNumber} added`,
      user: req.user._id,
      icon: "room",
    });

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

    let sortOption = { createdAt: -1 };
    const { roomType, status, search, minPrice, maxPrice, sort } = req.query;

    if (roomType) {
      query.roomType = roomType;
    }
    if (status) {
      query.status = status;
    }
    if (search) {
      query.roomNumber = { $regex: search, $options: "i" };
    }

    if (minPrice || maxPrice) {
      query.pricePerNight = {};
      if (minPrice) {
        query.pricePerNight.$gte = Number(minPrice);
      }
      if (maxPrice) {
        query.pricePerNight.$lte = Number(maxPrice);
      }
    }

    switch (sort) {
      case "price_asc":
        sortOption = { pricePerNight: 1 };
        break;
      case "price_desc":
        sortOption = { pricePerNight: -1 };
        break;
      case "oldest":
        sortOption = { createdAt: 1 };
        break;
      default:
        sortOption = { createdAt: -1 };
    }

    const totalRooms = await Room.countDocuments(query);

    const rooms = await Room.find(query)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(limit);

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

const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
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

const updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
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

const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    await room.deleteOne();

    res.status(200).json({
      success: true,
      message: "Room deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const uploadRoomImages = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    const uploadedImages = [];

    for (const file of req.files) {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "hotel_rooms",
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            },
          )
          .end(file.buffer);
      });

      uploadedImages.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    room.images.push(...uploadedImages);

    await room.save();

    res.status(200).json({
      success: true,
      images: room.images,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteRoomImage = async (req, res) => {
  try {
    const { roomId } = req.params;
    const { public_id } = req.body;

    const room = await Room.findById(roomId);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    await cloudinary.uploader.destroy(public_id);

    room.images = room.images.filter((img) => img.public_id !== public_id);

    await room.save();

    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
      images: room.images,
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
  getRoomById,
  updateRoom,
  deleteRoom,
  uploadRoomImages,
  deleteRoomImage,
};
