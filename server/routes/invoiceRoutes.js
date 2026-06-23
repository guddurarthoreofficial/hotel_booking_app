const express = require("express");

const {
  generateInvoice,
} = require("../controllers/invoiceController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get(
  "/:bookingId",
  protect,
  generateInvoice
);

module.exports = router;