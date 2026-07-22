const express = require("express");

const {
  getDashboardStats,
  getRevenueAnalytics,
} = require("../controllers/dashboardController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
  "/stats",
  protect,
  authorize("admin", "manager"),
  getDashboardStats
);

router.get(
  "/revenue",
  protect,
  authorize("admin", "manager"),
  getRevenueAnalytics
);

module.exports = router;