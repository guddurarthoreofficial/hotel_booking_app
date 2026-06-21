const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    roomType: {
      type: String,
      enum: [
        "standard",
        "deluxe",
        "premium",
        "suite",
      ],
      required: true,
    },

    pricePerNight: {
      type: Number,
      required: true,
    },

    maxGuests: {
      type: Number,
      required: true,
    },

    amenities: [
      {
        type: String,
      },
    ],

    status: {
      type: String,
      enum: [
        "available",
        "occupied",
        "maintenance",
      ],
      default: "available",
    },

    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Room",
  roomSchema
);