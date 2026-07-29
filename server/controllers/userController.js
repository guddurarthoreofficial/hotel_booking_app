const User = require("../models/User");
const bcrypt = require("bcryptjs");

// ===============================
// Get Logged In User Profile
// ===============================

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Update Profile
// ===============================

const updateProfile = async (req, res) => {
  try {
    const { name, phone } = req.body;
    console.log("hello i am update user api");

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const phoneExists = await User.findOne({
      phone,
      _id: { $ne: req.user._id },
    });

    if (phoneExists) {
      return res.status(400).json({
        success: false,
        message: "Phone number already in use",
      });
    }

    if (name) user.name = name;
    if (phone) user.phone = phone;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        isActive: user.isActive,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Change Password
// ===============================

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Validation
    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Current password and new password are required",
      });
    }

    // Find user with password
    const user = await User.findById(req.user._id).select("+password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    // Prevent same password
    if (currentPassword === newPassword) {
      return res.status(400).json({
        success: false,
        message: "New password must be different",
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    // Save new password
    user.password = newPassword;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




const getUsers = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      role,
      isActive,
    } = req.query;

    const query = {};

    // Search
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
      ];
    }

    // Role Filter
    if (role) {
      query.role = role;
    }

    // Status Filter
    if (isActive !== undefined) {
      query.isActive = isActive === "true";
    }

    const totalUsers = await User.countDocuments(query);

    const users = await User.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * Number(limit))
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      users,

      pagination: {
        totalUsers,
        currentPage: Number(page),
        totalPages: Math.ceil(totalUsers / limit),
        limit: Number(limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      name,
      phone,
      role,
      isActive,
    } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Update allowed fields only
    if (name !== undefined) user.name = name;
    if (phone !== undefined) user.phone = phone;
    if (role !== undefined) user.role = role;
    if (isActive !== undefined)
      user.isActive = isActive;

    await user.save();

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getProfile,
  updateProfile,
  changePassword,
  getUsers,
  getUserById,
  updateUser,
};
