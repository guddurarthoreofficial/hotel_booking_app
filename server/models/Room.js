const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    images: [
      {
        public_id: String,
        url: String,
      },
    ],

    roomType: {
      type: String,
      enum: ["standard", "deluxe", "premium", "suite"],
      required: true,
    },

    pricePerNight: {
      type: Number,
      required: true,
    },

    maxGuests: {
      type: Number,
      required: true,
      min: 1,
    },

    roomSize: {
      type: Number, // Square Feet
      default: 0,
    },

    floor: {
      type: Number,
      default: 1,
    },

    bedType: {
      type: String,
      enum: ["single", "double", "queen", "king"],
      default: "double",
    },

    amenities: [
      {
        type: String,
      },
    ],

    status: {
      type: String,
      enum: ["available", "occupied", "maintenance"],
      default: "available",
    },

    description: {
      type: String,
      trim: true,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", roomSchema);