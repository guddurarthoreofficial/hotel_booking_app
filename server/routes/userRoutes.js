const express = require("express");



const {
  getProfile,
  updateProfile,
  changePassword,

    // Admin APIs
  getUsers,
  getUserById,
  updateUser,
  // updateUserStatus,
  // updateUserRole,
  // deleteUser,
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const router = express.Router();


router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.put("/change-password", protect, changePassword);


/* Admin User Management */
router.get("/", protect, authorize("admin"), getUsers);
router.get("/:id", protect, authorize("admin"), getUserById);
router.put("/:id", protect, authorize("admin"), updateUser);
// router.patch("/:id/status", protect, authorize("admin"), updateUserStatus);
// router.patch("/:id/role", protect, authorize("admin"), updateUserRole);
// router.delete("/:id", protect, authorize("admin"), deleteUser);

module.exports = router;